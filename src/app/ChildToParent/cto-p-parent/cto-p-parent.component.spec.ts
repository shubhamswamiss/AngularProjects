import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CToPParentComponent } from './cto-p-parent.component';

describe('CToPParentComponent', () => {
  let component: CToPParentComponent;
  let fixture: ComponentFixture<CToPParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CToPParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CToPParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
