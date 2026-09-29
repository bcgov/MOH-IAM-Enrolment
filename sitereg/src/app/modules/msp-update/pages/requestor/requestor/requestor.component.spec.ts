import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MspDirectUpdateRequestorComponent } from './requestor.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CoreModule } from 'app/core/core.module';

describe('IdentifyComponent', () => {
    let component: MspDirectUpdateRequestorComponent;
    let fixture: ComponentFixture<MspDirectUpdateRequestorComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [MspDirectUpdateRequestorComponent],
            imports: [HttpClientTestingModule, RouterTestingModule, CoreModule],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MspDirectUpdateRequestorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
