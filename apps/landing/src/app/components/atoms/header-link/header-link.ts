import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'landing-header-link',
  imports: [RouterLink],
  templateUrl: './header-link.html',
  styleUrl: './header-link.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class HeaderLink {
  link = input.required<LinkHeader>();
}
