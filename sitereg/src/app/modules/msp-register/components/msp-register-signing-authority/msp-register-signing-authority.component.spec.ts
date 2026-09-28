import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MspRegisterSigningAuthorityComponent } from './msp-register-signing-authority.component';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from '../../../../shared/shared.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MspRegisterUserMspComponent } from '../core/msp-register-user-msp/msp-register-user-msp.component';
import { MspRegisterUserComponent } from '../core/msp-register-user/msp-register-user.component';

describe('MspRegisterSigningAuthorityComponent', () => {
    let component: MspRegisterSigningAuthorityComponent;
    let fixture: ComponentFixture<MspRegisterSigningAuthorityComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [
                MspRegisterUserComponent,
                MspRegisterUserMspComponent,
                MspRegisterSigningAuthorityComponent
            ],
            imports: [RouterTestingModule, SharedModule, HttpClientTestingModule],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MspRegisterSigningAuthorityComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
