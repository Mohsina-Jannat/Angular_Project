import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

interface myData{
  obj: Array<Object>
}

@Injectable({
  providedIn: 'root'
})
export class RecordService {

  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get<myData>('http://localhost:1234/file.php')
    // return this.http.get<myData>('/api/file.php')  // configuring proxy for api calls
 
    // .subscribe(data =>{
    //   console.log("we got", data.obj)
    // })
  }

  // getData(){
  //   return [
  //   {
  //     name : "Mim",
  //     online : true
  //   },
  //   {
  //     name : "ABC",
  //     online : false
  //   },
  //   {
  //     name : "XYZ",
  //     online : true
  //   },
  //   {
  //     name : "ABC",
  //     online : false
  //   },
  //   {
  //     name : "XYZ",
  //     online : true
  //   }
  // ]
  // }
}
