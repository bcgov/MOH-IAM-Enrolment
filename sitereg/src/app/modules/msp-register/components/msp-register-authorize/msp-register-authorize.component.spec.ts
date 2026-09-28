import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MspRegisterAuthorizeComponent } from './msp-register-authorize.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MspRegisterAuthorizeAccessComponent } from '../msp-register-authorize-access/msp-register-authorize-access.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CoreModule } from 'app/core/core.module';

xdescribe('MspRegisterAuthorizeComponent', () => {
    let component: MspRegisterAuthorizeComponent;
    let fixture: ComponentFixture<MspRegisterAuthorizeComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [
                MspRegisterAuthorizeComponent,
                MspRegisterAuthorizeAccessComponent,
            ],
            imports: [
                RouterTestingModule,
                HttpClientTestingModule,
                CoreModule
            ],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MspRegisterAuthorizeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
