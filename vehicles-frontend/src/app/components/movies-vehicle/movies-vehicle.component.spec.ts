import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesVehicleComponent } from './movies-vehicle.component';

describe('MoviesVehicleComponent', () => {
  let component: MoviesVehicleComponent;
  let fixture: ComponentFixture<MoviesVehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoviesVehicleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviesVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
