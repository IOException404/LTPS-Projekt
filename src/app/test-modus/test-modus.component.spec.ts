import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestModusComponent } from './test-modus.component';

describe('TestModusComponent', () => {
  let component: TestModusComponent;
  let fixture: ComponentFixture<TestModusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestModusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestModusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
