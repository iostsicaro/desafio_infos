import { Component, EventEmitter, Input, Output } from '@angular/core';
import { VehiclesService } from '../../core/services/vehicles.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';

@Component({
  selector: 'app-modal-add-vehicle',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    CalendarModule
  ],
  templateUrl: './modal-add-vehicle.component.html',
  styleUrl: './modal-add-vehicle.component.scss'
})
export class ModalAddVehicleComponent {
  @Output() closeModal = new EventEmitter<void>();
  @Output() vehicleAdded = new EventEmitter<void>();
  
  vehicleForm: FormGroup;

  constructor(private vehiclesService: VehiclesService, private fb: FormBuilder) {
    this.vehicleForm = this.fb.group({
      placa: ['', Validators.required],
      chassi: ['', Validators.required],
      renavam: ['', Validators.required],
      modelo: ['', Validators.required],
      marca: ['', Validators.required],
      ano: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.vehicleForm.invalid) {
      alert('Preencha todos os campos corretamente.');
      return;
    }

    this.vehiclesService.criarVeiculo(this.vehicleForm.value).subscribe({
      next: () => {
        this.vehicleAdded.emit();
      },
      error: (err) => {
        console.error('Erro ao adicionar veículo', err);
        alert('Erro ao adicionar veículo');
      }
    });
  }

  onCloseModal(): void {
    this.closeModal.emit();
  }
}
