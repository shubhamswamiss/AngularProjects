import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivanExComponent } from './template-drivan-ex.component';

describe('TemplateDrivanExComponent', () => {
  let component: TemplateDrivanExComponent;
  let fixture: ComponentFixture<TemplateDrivanExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateDrivanExComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDrivanExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
