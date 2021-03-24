import { Component, OnInit, Input, EventEmitter, Output, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import {
    cUpdateEnumeration,
    validMultiFormControl,
    cUpdateValidators,
} from '../../../common/validators';
import { getEditJSONofOrganization } from '../shared/organization-json-map';
import { RandomObjects, IDataForm } from '../../../common/i-dataform';
import { environment } from 'src/environments/environment.prod';
import { Address } from 'moh-common-lib';
import { SpaEnvService } from '@shared/services/spa-env.service';

@Component({
    selector: 'sitereg-update-organization-edit',
    templateUrl: './organization-edit.component.html',
    styleUrls: ['./organization-edit.component.scss'],
})
export class MspDirectUpdateOrganizationEditComponent
    implements OnInit, IDataForm {
    @Input() formState: FormGroup | null;
    @Output()
    statusChanged: EventEmitter<FormGroup | null> = new EventEmitter<FormGroup | null>();

    parentForm: FormGroup;
    administeringForOptions = cUpdateEnumeration.administeringFor.edit;
    addressServiceUrl: string = environment.addressApiUrl;
    validFormControl: (fg: FormGroup, name: string) => boolean;
    json: (formValues: any) => any;

    constructor(private fb: FormBuilder,
                private spaEnvService: SpaEnvService, private cd: ChangeDetectorRef) {
        this.validFormControl = validMultiFormControl;
        this.json = getEditJSONofOrganization;
    }

    ngOnInit() {
        this.createOrUpdateForms();
        this.parentForm.valueChanges.subscribe((x) => {
            this.statusChanged.emit(this.parentForm);
            for (const controlName in this.parentForm.controls) {
                if (controlName) {
                    let control = this.parentForm.get(controlName);
                    if (control && control.status === 'INVALID') {
                        console.log(controlName + ' invalid');
                    }
                }
            }
        });
    }

    private createOrUpdateForms() {
        if (!this.formState) {
            // console.log('create form');
            this.parentForm = this.createForm();
        } else {
            // console.log('update form with state provided');
            this.parentForm = this.formState;
        }
        this.statusChanged.emit(this.parentForm);
    }

    private createForm() {
        const form = this.fb.group({
            organizationName: [
                null,
                cUpdateValidators.organization.organizationName,
            ],
            addressLookup: [],
            suite: [null, cUpdateValidators.organization.suite],
            street: [null, cUpdateValidators.organization.street],
            streetName: [null, cUpdateValidators.organization.streetName],
            addressLine2: [null, cUpdateValidators.organization.addressLine2],
            city: [null, cUpdateValidators.organization.city],
            province: [null, cUpdateValidators.organization.province],
            postalCode: [null, cUpdateValidators.organization.postalCode],
            administeringFor: [
                this.administeringForOptions[0],
                cUpdateValidators.organization.administeringFor,
            ],
        });
        this.patchValue(form);
        return form;
    }

    patchValue(formGroup) {
        if (!environment.useDummyData) return;
        formGroup.patchValue(RandomObjects.getOrganization('Org'));
    }

    get isAddressValidatorEnabled(): boolean {
        const env = this.spaEnvService.getValues();
        return env && env.SPA_ENV_ENABLE_ADDRESS_VALIDATOR === 'true';
    }

    onAddressSelect(address: Address) {
        if (address){
            if (address.unitNumber){
                this.formState.patchValue({suite: address.unitNumber});
            }
            if (address.streetNumber){
                this.formState.patchValue({street: address.streetNumber});
            }
            if (address.streetName){
                this.formState.patchValue({streetName: address.streetName});
            }
            if (address.city){
                this.formState.patchValue({city: address.city});
            }
            if (address.province){
                this.formState.patchValue({province: address.province});
            }
            if (address.postal){
                this.formState.patchValue({postalCode: address.postal});
            }
        }
    }
}
