import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../models/portfolio-data.service';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  experiences = this.data.experiences;
  activeIndex = 0;
  constructor(public data: PortfolioDataService) {}

  setActive(i: number): void { this.activeIndex = i; }
}
