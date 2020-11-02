import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectHabitacionComponent } from './select-habitacion.component';

describe('SelectHabitacionComponent', () => {
  let component: SelectHabitacionComponent;
  let fixture: ComponentFixture<SelectHabitacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectHabitacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectHabitacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
