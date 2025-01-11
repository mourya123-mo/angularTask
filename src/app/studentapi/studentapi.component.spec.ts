import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentapiComponent } from './studentapi.component';

describe('StudentapiComponent', () => {
  let component: StudentapiComponent;
  let fixture: ComponentFixture<StudentapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentapiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
