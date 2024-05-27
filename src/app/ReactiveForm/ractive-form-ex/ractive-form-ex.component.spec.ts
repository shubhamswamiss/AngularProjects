import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RactiveFormExComponent } from './ractive-form-ex.component';

describe('RactiveFormExComponent', () => {
  let component: RactiveFormExComponent;
  let fixture: ComponentFixture<RactiveFormExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RactiveFormExComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RactiveFormExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
