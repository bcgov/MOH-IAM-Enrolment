import { Component, OnInit, ChangeDetectionStrategy, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MspRegisterStateService } from '@msp-register/services/msp-register-state.service';
import { CountryData } from '@shared/models/country-data';
import { BehaviorSubject } from 'rxjs';
import { IProvince } from '@shared/interfaces/i-provinces';
import {
    validFormControl,
    organizationNumberValidator,
} from '@msp-register/models/validator-helpers';
import { MspRegisterDataService } from '@msp-register/services/msp-register-data.service';
import { LoggerService } from '@shared/services/logger.service';
import { GlobalConfigService } from '@shared/services/global-config.service';
import {
    funcRemoveStrings,
    MSP_REGISTER_ROUTES,
} from '@msp-register/constants';
import { MspRegistrationService } from '@msp-register/msp-registration.service';
import { ConsentModalComponent, Address } from 'moh-common-lib';
import { environment } from 'src/environments/environment.prod';
import { SpaEnvService } from '@shared/services/spa-env.service';

@Component({
    selector: 'sitereg-msp-register-organization',
    templateUrl: './msp-register-organization.component.html',
    styleUrls: ['./msp-register-organization.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MspRegisterOrganizationComponent implements OnInit, AfterViewInit {
    public get environment(): any {
        return environment;
    }
    fg: FormGroup;
    provinces: BehaviorSubject<IProvince[]> = new BehaviorSubject<IProvince[]>(
        null
    );
    administeringFor: BehaviorSubject<string[]> = new BehaviorSubject<string[]>(
        [
            'Employees',
            'International Students',
            'Employees and International Students',
        ]
    );
    public addressServiceUrl: string = environment.addressApiUrl;

    @ViewChild('consentModal') consentModal: ConsentModalComponent;

    validFormControl: () => boolean;

    constructor(
        private router: Router,
        public loggerSvc: LoggerService,
        public globalConfigSvc: GlobalConfigService,
        public mspRegisterStateSvc: MspRegisterStateService,
        public mspRegDataSvc: MspRegisterDataService,
        public registrationService: MspRegistrationService,
        private spaEnvService: SpaEnvService
    ) {
        this.fg = this.mspRegisterStateSvc.mspRegisterOrganizationForm;
        this.validFormControl = validFormControl.bind(this);
        const formData = new CountryData();
        const options = formData.provinces.filter(
            (itm) => itm.country === 'CAN'
        );
        this.provinces.next(options);
    }

    ngOnInit() {
        this.registrationService.setItemIncomplete();
        this.fg.valueChanges.subscribe((obs) => {
            // converts postalcode in upper case
            const postalCode = this.fg.get('postalCode');
            if (postalCode.value) {
                postalCode.patchValue(postalCode.value.toUpperCase(), {
                    emitEvent: false,
                });
            }
            this.schemaObject();
        });
    }

    ngAfterViewInit() {
        if (!this.mspRegisterStateSvc.hasConsentedToInformationCollection) {
            this.consentModal.showFullSizeView();
        }
    }

    onAcceptCollectionNotice(accepted: boolean) {
        this.mspRegisterStateSvc.hasConsentedToInformationCollection = accepted;
    }

    continue() {
        // splunk-log
        this.loggerSvc.logNavigation(
            this.constructor.name,
            `Valid Data - Continue button clicked. ${
            this.globalConfigSvc.applicationId
            }`
        );

        this.registrationService.setItemComplete();

        this.router.navigate([MSP_REGISTER_ROUTES.SIGNING_AUTHORITY.fullpath]);
    }

    updateThirdPartyValidations(required: boolean) {
        // const administeringForControl = this.fg.get('administeringFor');
        const organizationNumberControl = this.fg.get('organizationNumber');

        if (required === true) {
            // administeringForControl.setValidators(Validators.required);
            organizationNumberControl.setValidators([
                Validators.minLength(8),
                Validators.maxLength(8),
                organizationNumberValidator(),
            ]);
        } else {
            // administeringForControl.clearValidators();
            organizationNumberControl.clearValidators();

            // administeringForControl.patchValue(null, { emitEvent: false });
            organizationNumberControl.patchValue(null, { emitEvent: false });
        }

        // administeringForControl.updateValueAndValidity();
        organizationNumberControl.updateValueAndValidity();
    }

    // REMOVEME - debug only
    schemaObject() {
        if (!this.globalConfigSvc.debug) return;
        const form = this.mspRegisterStateSvc.mspRegisterOrganizationForm;
        const middleWareObject = this.mspRegDataSvc.mapOrgInformation(
            form.value
        );
        return middleWareObject;
    }

    get isAddressValidatorEnabled(): boolean {
        const env = this.spaEnvService.getValues();
        return env && env.SPA_ENV_ENABLE_ADDRESS_VALIDATOR === 'true';
    }

    // TODO: Add unit tests to confirm form patch.
    onAddressSelect(address: Address) {
        if (address){
            if (address.unitNumber){
                this.fg.patchValue({suite: address.unitNumber});
            }
            if (address.streetNumber){
                this.fg.patchValue({street: address.streetNumber});
            }
            if (address.streetName){
                this.fg.patchValue({streetName: address.streetName});
            }
            if (address.city){
                this.fg.patchValue({city: address.city});
            }
            if (address.province){
                this.fg.patchValue({province: address.province});
            }
            if (address.postal){
                this.fg.patchValue({postalCode: address.postal.replace(' ', '')});
            }
        }
    }
}
