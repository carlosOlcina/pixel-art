import { Route } from '@angular/router';
import { MainPage } from './components/pages/main/main-page';

export const appRoutes: Route[] = [{ path: '', loadComponent: () => MainPage }];
