import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleConditionOrelseifComponent } from './multiple-condition-orelseif.component';

describe('MultipleConditionOrelseifComponent', () => {
  let component: MultipleConditionOrelseifComponent;
  let fixture: ComponentFixture<MultipleConditionOrelseifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultipleConditionOrelseifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleConditionOrelseifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
