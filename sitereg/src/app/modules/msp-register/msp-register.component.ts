import { Component, OnInit } from '@angular/core';
import { Container } from 'moh-common-lib-angular';
import { subRoutes } from '../msp-register/sub-routes';
import { Router } from '@angular/router';
import { GlobalConfigService } from '../../shared/services/global-config.service';
import { MspRegistrationService } from './msp-registration.service';

@Component({
    standalone: false,
    selector: 'sitereg-msp-register',
    templateUrl: './msp-register.component.html',
    styleUrls: ['./msp-register.component.scss'],
})
export class MspRegisterComponent extends Container implements OnInit {
    showStepper(): boolean {
        return !this.registrationService.enableConfirmation;
    }

    constructor(
        private registrationService: MspRegistrationService,
        private router: Router,
        private globalConfigSvc: GlobalConfigService
    ) {
        super();

        this.setProgressItems();
    }

    ngOnInit() {
        this.registrationService.getRegisterationItems();
    }

    setProgressItems() {
        const progressItemRoute = subRoutes.filter((x) => {
            return !(x.path.includes('_') || x.path.includes('confirmation'));
        });

        this.setProgressSteps(progressItemRoute);
    }
}
