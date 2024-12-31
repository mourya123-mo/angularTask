import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaliculatorComponent } from './caliculator.component';

describe('CaliculatorComponent', () => {
  let component: CaliculatorComponent;
  let fixture: ComponentFixture<CaliculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaliculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaliculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
