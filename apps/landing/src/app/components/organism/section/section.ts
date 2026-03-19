import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'landing-section',
  imports: [],
  standalone: true,
  templateUrl: './section.html',
  styleUrl: './section.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Section {}
