import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationBlogComponent } from './application-blog.component';

describe('ApplicationBlogComponent', () => {
  let component: ApplicationBlogComponent;
  let fixture: ComponentFixture<ApplicationBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationBlogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicationBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
