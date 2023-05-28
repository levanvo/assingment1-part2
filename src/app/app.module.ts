import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './Component/product-list/product-list.component';
import { AddListComponent } from './Component/add-list/add-list.component';
import { UpdateListComponent } from './Component/update-list/update-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    AddListComponent,
    UpdateListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
