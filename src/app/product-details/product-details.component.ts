import { Component, Input } from '@angular/core';
import { IProduct } from '../catalog/product.model';

@Component({
  selector: 'bot-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  @Input() product!: IProduct;

   getImageUrl(product: IProduct){
  return '/assets/images/robot-parts/' + product.imageName ;
 }

 addToCart(product: IProduct){

 }

  getDiscountedClasses(product : IProduct){
  // return { strikethrough: product.discount > 0 };
  //alternatively
  if(product.discount > 0) return ["strikethrough"] //you can add more classes if you have
  else return [];
 }

}
