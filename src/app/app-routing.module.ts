import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CartListComponent } from './modules/cart-list/cart-list.component';
import { CatalogComponent } from './modules/catalog/catalog.component';

const routes: Routes = [
  { path: '', component: CatalogComponent },
  { path: 'panier', component: CartListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
