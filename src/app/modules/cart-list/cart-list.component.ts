import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Cart } from 'src/app/models/cart.model';
import { selectCart } from 'src/app/state/cart.selector';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css'],
})
export class CartListComponent {
  constructor(public store: Store) {}
  totalPrice = of(0);
  cart$ = this.store.pipe(select(selectCart));

  ngOnInit(): void {
    this.store.subscribe((cart: Cart[]) => {
      this.totalPrice = this.getTotalPrice();
    });
  }

  getTotalPrice(): Observable<number> {
    return this.cart$.pipe(
      map((cartContent) => {
        let totalPrice = 0;
        cartContent.forEach((cart) => {
          totalPrice += cart.price * cart.quantity;
        });
        return totalPrice;
      })
    );
  }
}
