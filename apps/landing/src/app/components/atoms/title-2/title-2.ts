import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import colorsBrand from '../../../data/colors';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'landing-title-2',
  imports: [NgStyle],
  templateUrl: './title-2.html',
  styleUrl: './title-2.css',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Title2 {
  color = input<string>(colorsBrand.primary);
}
