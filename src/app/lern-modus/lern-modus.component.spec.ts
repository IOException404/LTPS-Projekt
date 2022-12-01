import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LernModusComponent } from './lern-modus.component';

describe('LernModusComponent', () => {
  let component: LernModusComponent;
  let fixture: ComponentFixture<LernModusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LernModusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LernModusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
