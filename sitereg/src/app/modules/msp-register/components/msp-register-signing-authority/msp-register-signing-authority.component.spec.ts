import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MspRegisterSigningAuthorityComponent } from './msp-register-signing-authority.component';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from '../../../../shared/shared.module';
import { MspRegisterUsersComponent } from '../msp-register-users/msp-register-users.component';

describe('MspRegisterSigningAuthorityComponent', () => {
    let component: MspRegisterSigningAuthorityComponent;
    let fixture: ComponentFixture<MspRegisterSigningAuthorityComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule, SharedModule],
            declarations: [
                MspRegisterUsersComponent,
                MspRegisterSigningAuthorityComponent
            ],
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
