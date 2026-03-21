import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';
import { Logo } from '../../atoms/logo/logo';
import { Title1 } from '../../atoms/title-1/title-1';
import colorsBrand from '../../../data/colors';
import { Section } from '../section/section';
import { ScrollSectionService } from '../../../services/scroll-section';
import { NgClass } from '@angular/common';

@Component({
  selector: 'landing-hero-section',
  imports: [Logo, Title1, Section, NgClass],
  providers: [ScrollSectionService],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class HeroSection {
  scrollSectionService = inject(ScrollSectionService);

  isOut = computed(() => this.scrollSectionService.outSection() === 'hero');

  colorLogo = colorsBrand.primary;
}
