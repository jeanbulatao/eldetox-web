import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
{ path: '', loadChildren: () => import('./landing-page/landing-page.module').then(m => m.LandingPageModule) },
{ path: 'men', loadChildren: () => import('./men/men.module').then(m => m.MenModule) },
{ path: 'women', loadChildren: () => import('./women/women.module').then(m => m.WomenModule) },
{ path: 'nutrition', loadChildren: () => import('./nutrition/nutrition.module').then(m => m.NutritionModule) },
{ path: 'little-one', loadChildren: () => import('./little-one/little-one.module').then(m => m.LittleOneModule) },
{ path: 'cart', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule) },
{ path: 'checkout', loadChildren: () => import('./checkout/checkout.module').then(m => m.CheckoutModule) },
{ path: 'login', loadChildren: () => import('./Auth/login/login.module').then(m => m.LoginModule) },
{ path: 'register', loadChildren: () => import('./Auth/register/register.module').then(m => m.RegisterModule) },
{ path: '**', component:NotFoundComponent },
{
  path: '',
  redirectTo: '',
  pathMatch: 'full'
}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
