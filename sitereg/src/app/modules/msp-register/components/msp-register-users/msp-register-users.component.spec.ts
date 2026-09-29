import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { MspRegisterUsersComponent } from './msp-register-users.component';
import { SharedModule } from '../../../../shared/shared.module';
import { RouterTestingModule } from '@angular/router/testing';
import { MspRegisterUserComponent } from '../core/msp-register-user/msp-register-user.component';

describe('MspRegisterUsersComponent', () => {
    let component: MspRegisterUsersComponent;
    let fixture: ComponentFixture<MspRegisterUsersComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule, SharedModule],
            declarations: [
                MspRegisterUserComponent,
                MspRegisterUsersComponent
            ],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MspRegisterUsersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
