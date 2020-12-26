import {apiUrl} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {ProductServicesListModel} from '../model/ProductServicesListModel';
import {catchError, tap} from 'rxjs/operators';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {
  private productUrl = `${apiUrl}`;

  constructor(private http: HttpClient) {
  }

  /*getProductServicesList(id: string): Observable<ProductServicesListModel> {
    const url = `${this.productUrl}/${id}`;
    console.log('url ->', url);
    return this.http.get<ProductServicesListModel>(url).pipe(catchError(_ => {
      return of(new ProductServicesListModel());
    }));
  }*/

  /* MOCK */
  getProductServicesList(id: string): Observable<any> {
    const url = `${this.productUrl}/${id}`;
    console.log('url ->', url);
    return this.http.get(url + '.json').pipe(tap(data => console.log(data)));
  }
}
