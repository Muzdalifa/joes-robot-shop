import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../catalog/product.model';

@Component({
  selector: 'bot-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  @Input() product!: IProduct;
  @Output() buy = new EventEmitter();

   getImageUrl(product: IProduct){
  return '/assets/images/robot-parts/' + product.imageName ;
 }

 buyButtonClicked(product: IProduct){
  this.buy.emit();
 }

  getDiscountedClasses(product : IProduct){
  // return { strikethrough: product.discount > 0 };
  //alternatively
  if(product.discount > 0) return ["strikethrough"] //you can add more classes if you have
  else return [];
 }

}
