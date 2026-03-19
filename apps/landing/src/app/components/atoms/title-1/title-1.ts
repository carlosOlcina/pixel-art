import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'landing-title-1',
  imports: [],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './title-1.html',
  styleUrl: './title-1.css',
})
export class Title1 {
}
