import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';

const appRoutes: Routes = [
    {
        path: '',
        component: LandingComponent
    },
    {
        path: '**',
        component: LandingComponent
    }
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes);
