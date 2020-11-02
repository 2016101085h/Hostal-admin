import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentPruebaComponent } from './content-prueba.component';

describe('ContentPruebaComponent', () => {
  let component: ContentPruebaComponent;
  let fixture: ComponentFixture<ContentPruebaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentPruebaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentPruebaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
