import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Title2 } from '../../atoms/title-2/title-2';
import { NgClass } from '@angular/common';
import Projects from '../../../data/projects';
import { ScrollSectionService } from '../../../services/scroll-section';

@Component({
  selector: 'landing-projects-section',
  imports: [Title2, NgClass],
  templateUrl: './projects-section.html',
  styleUrl: './projects-section.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class ProjectsSection {
  projects = Projects;
  scrollSectionService = inject(ScrollSectionService);

  nextSection = this.scrollSectionService.nextSection;
  outSection = this.scrollSectionService.outSection;
}
