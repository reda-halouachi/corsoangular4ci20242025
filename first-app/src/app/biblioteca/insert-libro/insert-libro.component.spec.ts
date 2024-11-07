import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertLibroComponent } from './insert-libro.component';

describe('InsertLibroComponent', () => {
  let component: InsertLibroComponent;
  let fixture: ComponentFixture<InsertLibroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsertLibroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertLibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
