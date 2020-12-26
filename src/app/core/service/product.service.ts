import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProductInfo} from '../model/productInfo';
import {catchError, tap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {apiUrl} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productUrl = `${apiUrl}/product`;
  private categoryUrl = `${apiUrl}/category`;

  // private productUrl = '';
  // private categoryUrl = 'assets/category/1.json';

  constructor(private http: HttpClient) {
  }

  getDetail(id: string): Observable<ProductInfo> {
    const url = `${this.productUrl}/${id}`;
    return this.http.get<ProductInfo>(url).pipe(
      catchError(_ => {
        return of(new ProductInfo());
      })
    );
  }

  getCategoryInPage(categoryType: number): Observable<any> {
    const url = `${this.categoryUrl}/${categoryType}`;
    // const url = this.categoryUrl;
    return this.http.get(url).pipe(
      tap(data => console.log(data))
    );
  }

}
