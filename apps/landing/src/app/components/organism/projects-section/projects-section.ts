import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Title2 } from '../../atoms/title-2/title-2';
import { NgStyle } from '@angular/common';
import Projects from '../../../data/projects';

@Component({
  selector: 'landing-projects-section',
  imports: [Title2, NgStyle],
  templateUrl: './projects-section.html',
  styleUrl: './projects-section.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsSection {
  projects = Projects
}
