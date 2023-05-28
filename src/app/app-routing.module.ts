import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './Component/product-list/product-list.component';
import { AddListComponent } from './Component/add-list/add-list.component';
import { UpdateListComponent } from './Component/update-list/update-list.component';

const routes: Routes = [
  {path:"",component:ProductListComponent},
  {path:"addPr",component:AddListComponent},
  {path:"updatePr/:id",component:UpdateListComponent},
  {path:"**",component:ProductListComponent,pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
