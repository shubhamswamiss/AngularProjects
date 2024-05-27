import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostApiMethodComponent } from './post-api-method.component';

describe('PostApiMethodComponent', () => {
  let component: PostApiMethodComponent;
  let fixture: ComponentFixture<PostApiMethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostApiMethodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostApiMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
