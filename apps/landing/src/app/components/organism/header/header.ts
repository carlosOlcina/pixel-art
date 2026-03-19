import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderLink } from '../../atoms/header-link/header-link';

@Component({
  selector: 'landing-header',
  imports: [RouterLink, HeaderLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header {
  readonly links: LinkHeader[] = [
    {
      id: '6RB_Zf9-rJVGmfoxjkxcH',
      label: 'Sobre nosotros',
      href: '',
      fragment: '',
    },
    {
      id: 'qTxmvaOP3wspCq5DVQGlW',
      label: 'Proyectos',
      href: '',
      fragment: '',
    },
    {
      id: 'Q3crbLQRvjnJ8UceCPT33',
      label: 'Contacto',
      href: '',
      fragment: '',
    },
  ];
}
