import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  //Aqui inicializamos el objeto puede ser propiedad por propiedad o con ! que significa que nunca lo enviaremos vacio
  @Input() product!: Product;
}
