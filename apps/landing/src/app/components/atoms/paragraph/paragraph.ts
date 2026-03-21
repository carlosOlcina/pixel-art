import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import colorsBrand from '../../../data/colors';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'landing-paragraph',
  imports: [NgStyle],
  templateUrl: './paragraph.html',
  styleUrl: './paragraph.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class Paragraph {
  color = input<string>(colorsBrand.neutral);
}
