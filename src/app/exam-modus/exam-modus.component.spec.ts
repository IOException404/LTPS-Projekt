import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamModusComponent } from './exam-modus.component';

describe('ExamModusComponent', () => {
  let component: ExamModusComponent;
  let fixture: ComponentFixture<ExamModusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamModusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamModusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
