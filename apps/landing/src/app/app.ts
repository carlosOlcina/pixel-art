import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeroSection } from './components/organism/hero-section/hero-section';
import { Header } from './components/organism/header/header';
import { AboutUsSection } from './components/organism/about-us-section/about-us-section';
import { ProjectsSection } from './components/organism/projects-section/projects-section';

@Component({
  imports: [
    RouterModule,
    HeroSection,
    Header,
    AboutUsSection,
    ProjectsSection,
  ],
  selector: 'app-root',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
