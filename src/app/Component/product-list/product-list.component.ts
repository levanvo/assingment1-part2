import { Component } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  allPr: any[] = [];
  constructor(
    private controlPr: ServiceService,
  ) {
    this.controlPr.getAllPr().subscribe((data: any) => {
      this.allPr = data;
    });
  };

  Remove(id: any) {
    const confirm = window.confirm("are you sure ?");
    if (confirm) {
      this.controlPr.removePr(id).subscribe();
      this.allPr = this.allPr.filter((item: any) => item.id != id);
      alert(`Remove successfully !`);
    };
  };

};
