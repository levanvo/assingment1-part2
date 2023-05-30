import { Component } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-update-list',
  templateUrl: './update-list.component.html',
  styleUrls: ['./update-list.component.scss']
})
export class UpdateListComponent {
  allPr: any[] = [];
  ObjectUpdate: any = {
    name: "",
    price: 0,
  };
  constructor(
    private controlPr: ServiceService,
    private router: ActivatedRoute,
  ) {
    this.controlPr.getAllPr().subscribe((data: any) => {
      this.allPr = data;
    });
    this.router.paramMap.subscribe((idPr: any) => {
      const id = Number(idPr.get("id"));
      this.controlPr.getOnePr(id).subscribe((dataOne: any) => {
        this.ObjectUpdate = dataOne;
      });
    });
  };
  OnupdatePr() {
    this.controlPr.updatePr(this.ObjectUpdate).subscribe();
    alert(`Update: ${this.ObjectUpdate.name} successfully !`);
    window.location.href = "";
  };
};
