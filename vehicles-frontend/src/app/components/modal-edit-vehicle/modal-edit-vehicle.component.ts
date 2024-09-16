import { Component, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { VehiclesService } from '../../core/services/vehicles.service';
import { CalendarModule } from 'primeng/calendar';

@Component({
  selector: 'app-modal-edit-vehicle',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CalendarModule
  ],
  templateUrl: './modal-edit-vehicle.component.html',
  styleUrl: './modal-edit-vehicle.component.scss'
})
export class ModalEditVehicleComponent {
  @Input() veiculo: any;
  @Output() closeModal = new EventEmitter<void>();
  @Output() vehicleUpdated = new EventEmitter<void>();

  vehicleForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private vehiclesService: VehiclesService) { }

  ngOnInit() {
    this.vehicleForm = this.formBuilder.group({
      placa: [this.veiculo.placa, Validators.required],
      chassi: [this.veiculo.chassi, Validators.required],
      renavam: [this.veiculo.renavam, Validators.required],
      modelo: [this.veiculo.modelo, Validators.required],
      marca: [this.veiculo.marca, Validators.required],
      ano: [this.veiculo.ano, Validators.required]
    });

    if (this.veiculo) {
      this.vehicleForm.patchValue(this.veiculo);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['veiculo'] && this.veiculo && this.vehicleForm) {
      this.vehicleForm.patchValue(this.veiculo);
    }
  }

  onSubmit() {
    if (this.vehicleForm.valid) {
      this.vehiclesService.atualizarVeiculo(this.veiculo.id, this.vehicleForm.value).subscribe(() => {
        this.vehicleUpdated.emit();
        this.closeModal.emit();
      });
    }
  }

  onClose() {
    this.closeModal.emit();
  }
}
