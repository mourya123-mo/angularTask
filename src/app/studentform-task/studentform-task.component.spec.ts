import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentformTaskComponent } from './studentform-task.component';

describe('StudentformTaskComponent', () => {
  let component: StudentformTaskComponent;
  let fixture: ComponentFixture<StudentformTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentformTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentformTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
