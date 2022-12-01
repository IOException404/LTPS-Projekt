import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McFragenListeComponent } from './mc-fragen-liste.component';

describe('McFragenListeComponent', () => {
  let component: McFragenListeComponent;
  let fixture: ComponentFixture<McFragenListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ McFragenListeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(McFragenListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
