import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const LAYOUT_ROUTES: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../pages/home/home.module').then(m => m.HomeModule)

      },
      {
        path: 'view',
        loadChildren: () => import('../pages/view/view.module').then(m => m.ViewModule)
      },
      {
        path: 'error',
        loadChildren: () => import('../pages/error/error.module').then(m => m.ErrorModule)
      },
      {
        path: 'about',
        loadChildren: () => import('../pages/about/about.module').then(m => m.AboutModule)
      }
    ]
  }
];

export const LayoutRoutes = RouterModule.forChild(LAYOUT_ROUTES);
