import { Component } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.scss']
})
export class AddListComponent {
  allProducts: any[] = [];
  objectAdd:any={
    name:"",
    price:0,
  }
  constructor(
    private controlPr: ServiceService
  ) {
    this.controlPr.getAllPr().subscribe((data: any) => {
      this.allProducts = data;
    })
  }
  AddPr(){
    // let b=true;
    // this.allProducts.map((show:any)=>{
    //   if(show.name!=this.objectAdd.name){

    //   }else{
    //     b=false;
    //   }
    // })
    // if(b=false){
    //   alert("Ten bi trung !");
    // }
    this.controlPr.addPr(this.objectAdd).subscribe();
    this.allProducts=[this.allProducts,{...this.objectAdd}];
    window.location.href="";
    alert("Thêm thành công SP: "+ this.objectAdd.name);
  };
};
