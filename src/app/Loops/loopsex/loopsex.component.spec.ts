import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoopsexComponent } from './loopsex.component';

describe('LoopsexComponent', () => {
  let component: LoopsexComponent;
  let fixture: ComponentFixture<LoopsexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoopsexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoopsexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
