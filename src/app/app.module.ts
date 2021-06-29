import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreModule } from '@ngrx/store';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartListComponent } from './modules/cart-list/cart-list.component';
import { CatalogComponent } from './modules/catalog/catalog.component';
import { cardsReducer } from './state/cards.reducer';
import { cartReducer } from './state/cart.reducer';



@NgModule({
  declarations: [AppComponent, CatalogComponent, CartListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({ cardsResponse: cardsReducer, cart: cartReducer }),
    HttpClientModule,
    NgbModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
