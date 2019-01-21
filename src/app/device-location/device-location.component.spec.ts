import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceLocationComponent } from './device-location.component';

describe('DeviceLocationComponent', () => {
  let component: DeviceLocationComponent;
  let fixture: ComponentFixture<DeviceLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
