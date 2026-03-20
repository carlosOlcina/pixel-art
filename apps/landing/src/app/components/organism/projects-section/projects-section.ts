import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Title2 } from '../../atoms/title-2/title-2';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'landing-projects-section',
  imports: [Title2, NgStyle],
  templateUrl: './projects-section.html',
  styleUrl: './projects-section.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsSection {
  projects = [
    {
      id: 'rRAOXGvJk-Rv0gXalFCOj',
      title: 'Ovalo',
      description: 'Proyecto de bicicleta con diseño futurista',
      image: '/ovalo.png',
    },
    {
      id: 'YIoxlHK6AO33OfwshF7fJ',
      title: 'Optihome',
      description: 'Proyecto de landing page para empresa de domótica moderna',
      image: 'optihome.png',
    },
    {
      id: 'Mku2Xr3uJ-LF2VFHn53Xm',
      title: 'ORA',
      description: 'Proyecto de un reloj futurista que capta la luz solar',
      image: 'ora.png',
    },
  ];
}
