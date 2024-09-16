import { Component, Input, Output, EventEmitter } from '@angular/core';
import { VehiclesService } from '../../core/services/vehicles.service';

@Component({
  selector: 'app-modal-remove-vehicle',
  standalone: true,
  imports: [],
  templateUrl: './modal-remove-vehicle.component.html',
  styleUrl: './modal-remove-vehicle.component.scss'
})
export class ModalRemoveVehicleComponent {
  @Input() veiculo: any;
  @Output() closeModal = new EventEmitter<void>();
  @Output() confirmRemove = new EventEmitter<void>();

  constructor(private vehiclesService: VehiclesService) { }

  onConfirmRemove() {
    this.vehiclesService.removerVeiculo(this.veiculo.id).subscribe(() => {
      this.confirmRemove.emit();
      this.closeModal.emit();
    });
  }

  onClose() {
    this.closeModal.emit();
  }
}
