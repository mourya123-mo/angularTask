import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVehicleComponentComponent } from './create-vehicle-component.component';

describe('CreateVehicleComponentComponent', () => {
  let component: CreateVehicleComponentComponent;
  let fixture: ComponentFixture<CreateVehicleComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateVehicleComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateVehicleComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
