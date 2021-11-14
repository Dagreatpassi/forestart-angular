import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutes } from './app-routes.enum';

const routes: Routes = [
  {
    path: AppRoutes.HOME,
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: AppRoutes.GALLERY,
    loadChildren: () =>
      import('./gallery/gallery.module').then((m) => m.GalleryModule),
  },
  { path: AppRoutes.WILDCARD, redirectTo: AppRoutes.HOME, pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
