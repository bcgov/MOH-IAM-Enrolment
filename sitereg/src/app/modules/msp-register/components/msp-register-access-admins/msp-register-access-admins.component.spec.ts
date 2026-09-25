import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MspRegisterAccessAdminsComponent } from './msp-register-access-admins.component';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from '../../../../shared/shared.module';
import { MspRegisterStateService } from '../../../msp-register/services/msp-register-state.service';

describe('MspRegisterAccessAdminsComponent', () => {
    let component: MspRegisterAccessAdminsComponent;
    let fixture: ComponentFixture<MspRegisterAccessAdminsComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule, SharedModule],
            providers: [MspRegisterStateService],
            declarations: [
                MspRegisterAccessAdminsComponent
            ],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MspRegisterAccessAdminsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
