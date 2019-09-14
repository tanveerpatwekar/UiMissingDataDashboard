import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StoreInfo } from '../MasterData';
import { Observable } from 'rxjs';

@Injectable()
export class MidataserviceService {

  constructor(private http:HttpClient) 
  { 
  
  }
  
  getAllStores():Observable<StoreInfo[]>
  {
    return this.http.get<StoreInfo[]>("http://localhost:8080/api/allstores");
  }


  getAllMissingStore():Observable<StoreInfo[]>
  {
    return this.http.get<StoreInfo[]>("http://localhost:8080/api/allstores");
  }
}