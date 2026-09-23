import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './core/components/home-page/home-page.component';

const routes: Routes = [
    {
        path: 'home',
        component: HomePageComponent,
    },
    {
        path: 'register',
        loadChildren: () =>
            import('./modules/msp-register/msp-register.module').then(m => m.MspRegisterModule)
    },
    {
        path: 'update',
        loadChildren: () =>
            import('./modules/msp-update/update.module').then(m => m.MspDirectUpdateModule)
    },
    {
        path: 'maintenance',
        loadChildren: () =>
            import('./modules/splash-page/splash-page.module').then(m => m.SplashPageModule)
    },
    {
        path: '**',
        redirectTo: 'home',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
