import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentApiService {

baseUrl:string='https://6128991386a213001729f9df.mockapi.io/test/v1/student';
  constructor(private _httpClient:HttpClient) { }
  getStudents():Observable<any>{
    return this._httpClient.get(this.baseUrl);
  }
  delete(id:number):Observable<any>{
    return this._httpClient.delete(this.baseUrl+"/"+id);
  }
  filterStudent(term:string):Observable<any>{
    return this._httpClient.get(this.baseUrl+"?filter="+term);
  }
  sortStudent(column:string ,order:string):Observable<any>{
    return this._httpClient.get(this.baseUrl+"?sortBy="+column+"&order="+order);
  }
  getPaginatedStudents(limit:number,page:number):Observable<any>{
    return this._httpClient.get(this.baseUrl+"?limit="+limit+"&page="+page)
  }
  createStudent(data:any):Observable<any>{
    return this._httpClient.post(this.baseUrl,data)
  }
  studentDetails(id:number){
    return this._httpClient.get(this.baseUrl+"/"+id)
  }
  updateStudent(id:number,data:any){
    return this._httpClient.put(this.baseUrl+"/"+id,data);
  }
}
