import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationFormComponent } from './organization-form.component';

describe('OrganizationFormComponent', () => {
  let component: OrganizationFormComponent;
  let fixture: ComponentFixture<OrganizationFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizationFormComponent ]
    })
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
