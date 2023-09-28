import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'firstAngularApp';
  http = inject(HttpClient);
  products: Product[] = [];
  imageLoaded: boolean[] = [];
  ngOnInit() {
    this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products').subscribe((data) => {
      this.products = data;
      this.loadImages(this.products);
    });
  }
  //Función que verifica que la imagen se cargue correctamente
  loadImages(products: Product[]) {
    //Iteramos cada elemento con un for each para ver que traiga la imagen en caso contrario ponemos false a imageLoaded
    products.forEach((product, index) => {
      const image = new Image();
      image.src = product.images[0];
      image.onload = () => {
        this.imageLoaded[index] = true;
      };
      image.onerror = () => {
        this.imageLoaded[index] = false;
      };
    });
  }
}
