import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeroSection } from './components/organism/hero-section/hero-section';
import { Header } from './components/organism/header/header';
import { AboutUsSection } from './components/organism/about-us-section/about-us-section';

@Component({
  imports: [
    RouterModule,
    HeroSection,
    Header,
    AboutUsSection,
  ],
  selector: 'app-root',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
}
