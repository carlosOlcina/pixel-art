import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'landing-logo',
  imports: [],
  standalone: true,
  templateUrl: './logo.html',
  styleUrl: './logo.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Logo {
  color = input.required<string>();
  size = input.required<number>();
}
