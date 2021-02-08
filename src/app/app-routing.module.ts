import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'auth',
        loadChildren: () =>
          import('./auth/auth.module').then((m) => m.AuthModule)
      },
      {
        path: 'app',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('./core/core.module').then((m) => m.CoreModule)
      },
      {
        path: '**',
        redirectTo: 'app'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
