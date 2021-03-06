import { Component, Input, AfterViewInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {
    validMultiFormControl,
    matchFieldValidator,
} from '@msp-register/models/validator-helpers';

@Component({
    selector: 'sitereg-msp-register-user-msp',
    templateUrl: './msp-register-user-msp.component.html',
    styleUrls: ['./msp-register-user-msp.component.scss'],
})
export class MspRegisterUserMspComponent implements AfterViewInit {
     // for accessiblity
    @Input() formIndex = 1;
    @Input() fg: FormGroup;
    @Input() showMspDirectAccessQuestion = false;
    @Input() showAdministeringMSPForQuestion = true; // needed in MSP Updates only
    validFormControl: (fg: FormGroup, name: string) => boolean;

    constructor(private router: Router) {
        // this.validFormControl = validFormControl.bind(this);
        this.validFormControl = validMultiFormControl.bind(this);
    }

    ngAfterViewInit() {
        this.fg.setValidators(
            matchFieldValidator('confirmEmail', 'emailAddress')
        );
    }
}
