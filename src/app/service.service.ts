import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  getAllPr():Observable<any[]>{
    return this.http.get<any[]>(`http://localhost:3000/products`);
  };
  getOnePr(id:any):Observable<any[]>{
    return this.http.get<any[]>(`http://localhost:3000/products/${id}`);
  };
  addPr(data:any):Observable<any[]>{
    return this.http.post<any[]>(`http://localhost:3000/products`,data);
  };
  deletePr(id:any):Observable<any[]>{
    return this.http.delete<any[]>(`http://localhost:3000/products/${id}`);
  };
  updatePr(data:any):Observable<any[]>{
    return this.http.put<any[]>(`http://localhost:3000/products/${data.id}`,data);
  };
}
