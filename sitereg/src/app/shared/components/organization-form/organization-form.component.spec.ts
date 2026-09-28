import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { OrganizationFormComponent } from './organization-form.component';
import { SharedCoreModule, CityComponent, PageSectionComponent, PageFrameworkComponent, StreetComponent, PostalCodeComponent, DropdownComponent } from 'moh-common-lib-angular';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ErrorBoxComponent } from '../error-box/error-box.component';
import { ReactiveFormsModule } from '@angular/forms';

xdescribe('OrganizationFormComponent', () => {
  let component: OrganizationFormComponent;
  let fixture: ComponentFixture<OrganizationFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizationFormComponent, ErrorBoxComponent],
      imports: [
        SharedCoreModule,
        HttpClientTestingModule,
        PageFrameworkComponent,
        PageSectionComponent,
        StreetComponent,
        CityComponent,
        PostalCodeComponent,
        DropdownComponent,
        ReactiveFormsModule
      ],})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
