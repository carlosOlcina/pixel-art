import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Logo } from '../../atoms/logo/logo';
import { Paragraph } from '../../atoms/paragraph/paragraph';
import { Section } from '../section/section';
import { Title2 } from '../../atoms/title-2/title-2';
import colorsBrand from '../../../data/colors';

@Component({
  selector: 'landing-about-us-section',
  imports: [Logo, Paragraph, Section, Title2],
  templateUrl: './about-us-section.html',
  styleUrl: './about-us-section.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutUsSection {
  colorSecondary = colorsBrand.secondary;

  title = 'Quién somos';

  paragraphs = [
    {
      id: '-NxZZm_Y2UAmZWFBJ1Nne',
      text: 'No somos solo diseñadores. Somos traductores: convertimos lo que una marca siente pero no sabe cómo decir en formas, colores y composiciones que lo gritan sin usar una sola palabra',
    },
    {
      id: 'YhVtph67ilDkJ1p22cvwq',
      text: 'En cada proyecto que tocamos hay una obsesión silenciosa: que cuando alguien lo vean algo en su interior diga "esto es exactamente lo que buscaba", aunque nunca hubiera sabido describirlo',
    },
  ];
}
