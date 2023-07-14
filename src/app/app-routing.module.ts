import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductDetailpageComponent } from './product-detailpage/product-detailpage.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { AccountComponent } from './account/account.component';

const routes: Routes = [
{
  path: '',
  component: LoginComponent,
},
{
  path: 'home',
  component: HomeComponent,
},
{
  path: 'detail',
  component: ProductDetailpageComponent,
},
{
  path: 'product',
  component: ProductPageComponent,
},
{
  path: 'contact-us',
  component: ContactUsComponent,
},
{
  path: 'cart',
  component: CartComponent
},
{
  path: 'account',
  component: AccountComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
