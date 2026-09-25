import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { MspGroupNoComponent } from './msp-group-no.component';

describe('MspGroupNoComponent', () => {
  let component: MspGroupNoComponent;
  let fixture: ComponentFixture<MspGroupNoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MspGroupNoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MspGroupNoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
