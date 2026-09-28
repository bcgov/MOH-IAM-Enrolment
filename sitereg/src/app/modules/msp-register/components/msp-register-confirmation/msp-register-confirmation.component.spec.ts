import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MspRegisterConfirmationComponent } from './msp-register-confirmation.component';
import { CoreModule } from 'app/core/core.module';

describe('MspRegisterConfirmationComponent', () => {
    let component: MspRegisterConfirmationComponent;
    let fixture: ComponentFixture<MspRegisterConfirmationComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [MspRegisterConfirmationComponent],
            imports: [HttpClientTestingModule, RouterTestingModule, CoreModule],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MspRegisterConfirmationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
