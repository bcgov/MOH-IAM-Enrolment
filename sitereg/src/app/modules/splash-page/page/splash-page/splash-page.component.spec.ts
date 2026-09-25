import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { SplashPageComponent } from './splash-page.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SplashPageComponent', () => {
    let component: SplashPageComponent;
    let fixture: ComponentFixture<SplashPageComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [SplashPageComponent],
            imports: [HttpClientTestingModule, RouterTestingModule],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SplashPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
