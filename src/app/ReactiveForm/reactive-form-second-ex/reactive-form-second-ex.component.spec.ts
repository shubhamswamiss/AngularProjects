import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormSecondExComponent } from './reactive-form-second-ex.component';

describe('ReactiveFormSecondExComponent', () => {
  let component: ReactiveFormSecondExComponent;
  let fixture: ComponentFixture<ReactiveFormSecondExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveFormSecondExComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormSecondExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
