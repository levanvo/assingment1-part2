import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-update-list',
  templateUrl: './update-list.component.html',
  styleUrls: ['./update-list.component.scss']
})
export class UpdateListComponent {
  allProducts: any[] = [];
  objectUpdate:any={
    name:"",
    price:0,
  }
  constructor(
    private controlPr: ServiceService,
    private router:ActivatedRoute,
  ) {
    this.controlPr.getAllPr().subscribe((data: any) => {
      this.allProducts = data;
    });
    this.router.paramMap.subscribe((getId:any)=>{
      const id = Number(getId.get("id"));
      this.controlPr.getOnePr(id).subscribe((dataPr:any)=>{
        this.objectUpdate=dataPr;
      });      
    });
  };

  UpdatePr(){
    this.controlPr.updatePr(this.objectUpdate).subscribe();
    window.location.href="";
    alert("Cập nhật thành công !");
  }
};
