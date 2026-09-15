import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MspRegisterAutofillComponent } from 'src/app/modules/msp-register/components/autofill/autofill.component';

describe('AutofillComponent', () => {
    let component: MspRegisterAutofillComponent;
    let fixture: ComponentFixture<MspRegisterAutofillComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [MspRegisterAutofillComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MspRegisterAutofillComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
