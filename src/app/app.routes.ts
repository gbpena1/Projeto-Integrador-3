import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { ProductDetail } from './pages/product-detail/product-detail';
import { Cart } from './pages/cart/cart';
import { Checkout } from './pages/checkout/checkout';
import { Success } from './pages/success/success';

export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: 'product',
        component: ProductDetail
    },
    {
        path: 'cart',
        component: Cart
    },
    {
        path: 'checkout',
        component: Checkout
    },
    {
        path: 'success',
        component: Success
    },
];