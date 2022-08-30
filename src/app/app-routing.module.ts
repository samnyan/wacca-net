import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WaccaContainerComponent} from './container/wacca-container/wacca-container.component';

const routes: Routes = [
  {
    path: 'login',
    component: WaccaContainerComponent,
    loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'web',
    component: WaccaContainerComponent,
    loadChildren: () => import('./modules/game/game.module').then(m => m.GameModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
