import { Component, Input } from '@angular/core';
import { CercleItemComponent } from '../cercle-item/cercle-item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-compartiment-milieu',
  standalone: true,
  imports: [CercleItemComponent, CommonModule],
  templateUrl: './compartiment-milieu.component.html',
  styleUrl: './compartiment-milieu.component.css'
})
export class CompartimentMilieuComponent {
  @Input() numberOfCircle = 0;
  numberOfCircleArray: number[] = [];
  isHovered = false;
  
  ngOnInit(): void {
    this.numberOfCircleArray = Array.from({ length: this.numberOfCircle }, (_, index) => index + 1);
  }

  hoverCercleItems(isHovered: boolean): void {
    this.isHovered = isHovered;
  }
  
}
