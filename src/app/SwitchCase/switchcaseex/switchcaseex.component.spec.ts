import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchcaseexComponent } from './switchcaseex.component';

describe('SwitchcaseexComponent', () => {
  let component: SwitchcaseexComponent;
  let fixture: ComponentFixture<SwitchcaseexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchcaseexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchcaseexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
