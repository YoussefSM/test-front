import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CompartimentMilieuComponent } from './compartiment-milieu/compartiment-milieu.component';
import { CercleItemLeftComponent } from './cercle-item-left/cercle-item-left.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CompartimentMilieuComponent, CercleItemLeftComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'test-front';
}
