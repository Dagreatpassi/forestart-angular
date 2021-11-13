import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutes } from './app-routes.enum';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: AppRoutes.HOME,
    component: HomeComponent,
  },
  {
    path: AppRoutes.GALLERY,
    loadChildren: () =>
      import('./gallery/gallery.module').then((m) => m.GalleryModule),
  },
  { path: AppRoutes.WILDCARD, redirectTo: AppRoutes.HOME, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
