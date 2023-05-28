import { Component } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  allProducts: any[] = [];
  constructor(
    private controlPr: ServiceService
  ) {
    this.controlPr.getAllPr().subscribe((data: any) => {
      this.allProducts = data;
    })
  }
  RemovePr(id: any) {
    const x = window.confirm("Are you sure ?");
    if (x) {
      this.controlPr.deletePr(id).subscribe();
      this.allProducts = this.allProducts.filter((item: any) => item.id != id);
    }
  }
}
