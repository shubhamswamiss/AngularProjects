import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetInputBoxValueComponent } from './get-input-box-value.component';

describe('GetInputBoxValueComponent', () => {
  let component: GetInputBoxValueComponent;
  let fixture: ComponentFixture<GetInputBoxValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetInputBoxValueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetInputBoxValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
