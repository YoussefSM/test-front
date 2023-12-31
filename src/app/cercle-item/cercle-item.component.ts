import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cercle-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cercle-item.component.html',
  styleUrl: './cercle-item.component.css'
})
export class CercleItemComponent {
  @Input() isHovered = false;
}
