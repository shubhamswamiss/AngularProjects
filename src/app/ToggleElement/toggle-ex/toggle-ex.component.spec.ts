import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleExComponent } from './toggle-ex.component';

describe('ToggleExComponent', () => {
  let component: ToggleExComponent;
  let fixture: ComponentFixture<ToggleExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToggleExComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
