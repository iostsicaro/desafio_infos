import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRemoveVehicleComponent } from './modal-remove-vehicle.component';

describe('ModalRemoveVehicleComponent', () => {
  let component: ModalRemoveVehicleComponent;
  let fixture: ComponentFixture<ModalRemoveVehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalRemoveVehicleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalRemoveVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
