import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(
    private http:HttpClient,
  ) { }


  getAllPr():Observable<any[]>{
    return this.http.get<any[]>(`http://localhost:3000/products`);
  };
  getOnePr(id:any):Observable<any[]>{
    return this.http.get<any[]>(`http://localhost:3000/products/${id}`);
  };
  addPr(data:any):Observable<any[]>{
    return this.http.post<any[]>(`http://localhost:3000/products`,data);
  };
  updatePr(data:any):Observable<any[]>{
    return this.http.put<any[]>(`http://localhost:3000/products/${data.id}`,data);
  };
  removePr(id:any):Observable<any[]>{
    return this.http.delete<any[]>(`http://localhost:3000/products/${id}`);
  };
}
