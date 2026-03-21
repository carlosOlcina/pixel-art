import {
  inject,
  Injectable,
  OnDestroy,
  PLATFORM_ID,
  signal,
} from '@angular/core';
import Projects from '../data/projects';
import { fromEvent, Subscription, throttleTime } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ScrollSectionService implements OnDestroy {
  private sections = [
    'hero',
    'about-us',
    ...Projects.map((project) => `${project.id}`),
  ];

  direction = signal<'up' | 'down' | null>(null);
  nextSection = signal<string | null>('hero');
  outSection = signal<string | null>(null);

  private sub!: Subscription;

  private platformId = inject(PLATFORM_ID);
  private readonly isBrowser: boolean;

  constructor() {
    this.isBrowser = isPlatformBrowser(this.platformId);

    if (this.isBrowser) {
      this.sub = fromEvent<WheelEvent>(window, 'wheel', {
        passive: false,
        capture: true,
      })
        .pipe(throttleTime(2000))
        .subscribe((event) => {
          event.preventDefault();

          const dir = event.deltaY > 0 ? 'down' : 'up';

          this.direction.set(dir);
          console.log(dir);

          const currentIndex = this.sections.findIndex(
            (section) => section === this.nextSection(),
          );

          if (currentIndex === -1) return;

          this.outSection.set(this.nextSection());
          if (dir === 'up' && currentIndex > 0) {
            this.nextSection.set(this.sections[currentIndex - 1]);
          }

          if (dir === 'down' && currentIndex < this.sections.length - 1) {
            this.nextSection.set(this.sections[currentIndex + 1]);
          }
        });
    }
  }

  ngOnDestroy() {
    if (this.isBrowser) {
      this.sub.unsubscribe();
    }
  }
}
