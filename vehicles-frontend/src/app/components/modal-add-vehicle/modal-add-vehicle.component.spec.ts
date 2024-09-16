import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddVehicleComponent } from './modal-add-vehicle.component';

describe('ModalAddVehicleComponent', () => {
  let component: ModalAddVehicleComponent;
  let fixture: ComponentFixture<ModalAddVehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalAddVehicleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAddVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
