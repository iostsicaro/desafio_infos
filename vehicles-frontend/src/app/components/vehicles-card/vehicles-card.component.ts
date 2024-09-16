import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-vehicles-card',
  standalone: true,
  imports: [
    CommonModule,
    CardModule
  ],
  templateUrl: './vehicles-card.component.html',
  styleUrl: './vehicles-card.component.scss'
})
export class VehiclesCardComponent {
  @Input() veiculo: any;
  @Output() edit = new EventEmitter<any>();
  @Output() remove = new EventEmitter<any>();

  onEdit() {
    this.edit.emit(this.veiculo);
  }

  onRemove() {
    this.remove.emit(this.veiculo);
  }
}
