import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CToPChildComponent } from './cto-p-child.component';

describe('CToPChildComponent', () => {
  let component: CToPChildComponent;
  let fixture: ComponentFixture<CToPChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CToPChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CToPChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
