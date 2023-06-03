import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductDetailpageComponent } from './product-detailpage/product-detailpage.component';
import { ProductPageComponent } from './product-page/product-page.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent,
},
{
  path: 'detail',
  component: ProductDetailpageComponent,
},
{
  path: 'product',
  component: ProductPageComponent,
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
