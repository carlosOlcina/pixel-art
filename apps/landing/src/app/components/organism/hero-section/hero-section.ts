import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Logo } from '../../atoms/logo/logo';
import { Title1 } from '../../atoms/title-1/title-1';
import colorsBrand from '../../../data/colors';
import { Section } from '../section/section';

@Component({
  selector: 'landing-hero-section',
  imports: [Logo, Title1, Section],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroSection {
  colorLogo = colorsBrand.primary;
}
