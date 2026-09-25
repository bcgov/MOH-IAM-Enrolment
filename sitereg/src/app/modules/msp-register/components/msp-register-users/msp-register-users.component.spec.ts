import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { MspRegisterUsersComponent } from './msp-register-users.component';
import { SharedModule } from '../../../../shared/shared.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('MspRegisterUsersComponent', () => {
    let component: MspRegisterUsersComponent;
    let fixture: ComponentFixture<MspRegisterUsersComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule, SharedModule],
            declarations: [
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
