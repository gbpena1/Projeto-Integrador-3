import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PRODUCTS } from '../../data/product-mock';
import { Product, Pack, SingleCard, Accessory} from '../../models/product-model';

@Component({
  imports: [RouterLink],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  products: Product[] = PRODUCTS;
  asCard(product: Product): SingleCard {
    if (product.type === 'CARD') {
      return product as SingleCard;
    }
    throw new Error('Product is not a card');
  }
  asPack(product: Product): Pack {
    if (product.type === 'PACK') {
      return product as Pack;
    }
    throw new Error('Product is not a pack');
  }
  asAccessory(product: Product): Accessory {
    if (product.type === 'ACCESSORY') {
      return product as Accessory;
    }
    throw new Error('Product is not an accessory');
  }
}