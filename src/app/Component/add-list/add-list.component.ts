import { Component } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.scss']
})
export class AddListComponent {
  ObjectAdd:any={
    name:"",
    price:0,
  };
  allPr: any[] = [];
  constructor(
    private controlPr: ServiceService,
  ) {
    this.controlPr.getAllPr().subscribe((data: any) => {
      this.allPr = data;
    });
  };

  OnaddPr(){
    this.controlPr.addPr(this.ObjectAdd).subscribe();
    // this.allPr=[...this.allPr,...this.ObjectAdd];
    alert("Add product successfully !");
    window.location.href="";
  };

};

