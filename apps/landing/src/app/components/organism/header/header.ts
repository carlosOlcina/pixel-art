import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderLink } from '../../atoms/header-link/header-link';

@Component({
  selector: 'landing-header',
  imports: [HeaderLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class Header {}
