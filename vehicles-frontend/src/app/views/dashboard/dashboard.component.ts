import { Component, OnInit } from '@angular/core';
import { VehiclesService } from '../../core/services/vehicles.service'
import { Veiculo } from '../../models/veiculo.model';
import { ModalAddVehicleComponent } from "../../components/modal-add-vehicle/modal-add-vehicle.component";
import { VehiclesCardComponent } from "../../components/vehicles-card/vehicles-card.component";
import { ButtonModule } from 'primeng/button';
import { NavMenuComponent } from "../../components/nav-menu/nav-menu.component";
import { ModalEditVehicleComponent } from "../../components/modal-edit-vehicle/modal-edit-vehicle.component";
import { ModalRemoveVehicleComponent } from "../../components/modal-remove-vehicle/modal-remove-vehicle.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    ModalAddVehicleComponent,
    VehiclesCardComponent,
    ButtonModule,
    NavMenuComponent,
    ModalEditVehicleComponent,
    ModalRemoveVehicleComponent
],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  veiculos: Veiculo[] = [];
  showModal: boolean = false;
  showEditModal = false;
  showRemoveModal = false;
  selectedVehicle: any;

  constructor(private vehiclesService: VehiclesService) { }

  ngOnInit(): void {
    this.loadVehicles();
  }

  loadVehicles(): void {
    this.vehiclesService.listarVeiculos().subscribe({
      next: (data) => this.veiculos = data,
      error: (err) => console.error('Erro ao listar veículos', err)
    });
  }

  openModal(): void {
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
  }

  vehicleAdded(): void {
    this.closeModal();
    this.loadVehicles();
  }

  openEditModal(vehicle: any) {
    this.selectedVehicle = vehicle;
    this.showEditModal = true;
  }

  closeEditModal() {
    this.showEditModal = false;
    this.loadVehicles();
  }

  openRemoveModal(vehicle: any) {
    this.selectedVehicle = vehicle;
    this.showRemoveModal = true;
  }

  closeRemoveModal() {
    this.showRemoveModal = false;
    this.loadVehicles();
  }
}
