import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lojavirtual';

  products:any;

  constructor(private http: HttpClient) {
    this.getProducts()
  }

  getProducts() {
    this.http.get('http://localhost:9901/products/legumes').subscribe((response: any) => {
      console.log(response)
      this.products = response
    })
  }
}
