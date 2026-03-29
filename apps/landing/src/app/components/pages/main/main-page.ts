import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AboutUsSection } from '../../organism/about-us-section/about-us-section';
import { HeroSection } from '../../organism/hero-section/hero-section';
import { ProjectsSection } from '../../organism/projects-section/projects-section';

@Component({
  selector: 'landing-main-page',
  imports: [AboutUsSection, HeroSection, ProjectsSection],
  templateUrl: './main-page.html',
  styleUrl: './main-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class MainPage {}
