import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Logo } from './components/atoms/logo/logo';
import colorsBrand from './data/colors'
import { Title1 } from './components/atoms/title-1/title-1';
import { HeroSection } from './components/organism/hero-section/hero-section';
import { Header } from './components/organism/header/header';

@Component({
  imports: [RouterModule, Logo, Title1, HeroSection, Header],
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  colorLogo = colorsBrand.secondary;
}
