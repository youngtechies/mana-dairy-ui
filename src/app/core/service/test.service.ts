import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Customer} from "../model/customer";

@Injectable({
  providedIn: 'root'
})
export class TestService {

  apiUrl : string = '/api/hello-world';
  constructor(private httpClient : HttpClient) { }

  public getCustomers(){
    return this.httpClient.get<Customer>(this.apiUrl);
  }
}
