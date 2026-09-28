import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MspRegisterUserMspComponent } from './msp-register-user-msp.component';
import { MspRegisterUserComponent } from '../msp-register-user/msp-register-user.component';
import { ErrorBoxComponent } from 'app/shared/components/error-box/error-box.component';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from 'app/shared/shared.module';

xdescribe('MspRegisterPersonWithAccessComponent', () => {
    let component: MspRegisterUserMspComponent;
    let fixture: ComponentFixture<MspRegisterUserMspComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [MspRegisterUserMspComponent, ErrorBoxComponent, MspRegisterUserComponent],
            imports: [RouterTestingModule, SharedModule],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MspRegisterUserMspComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
