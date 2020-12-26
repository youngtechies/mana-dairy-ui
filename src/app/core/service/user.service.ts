import {Injectable} from '@angular/core';
import {User} from '../model/User';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {JwtResponse} from '../response/JwtResponse';
import {CookieService} from 'ngx-cookie-service';
import {ManaDairyRequest} from '../model/ManaDairyRequest';
import {apiUrl} from '../../../environments/environment';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private serviceUrl = `${apiUrl}`;
  public currentUser: Observable<JwtResponse>;
  private currentUserSubject: BehaviorSubject<JwtResponse>;


  constructor(private http: HttpClient,
              private cookieService: CookieService) {
    const memo = localStorage.getItem('currentUser');
    this.currentUserSubject = new BehaviorSubject<JwtResponse>(JSON.parse(memo));
    this.currentUser = this.currentUserSubject.asObservable();
    cookieService.set('currentUser', memo);
  }

  signUp(user: User): Observable<User> {
    return this.http.post<User>(this.serviceUrl + '/register', user);
  }

  logIn(user: User): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(this.serviceUrl + '/login', user);
  }

  // getAccountDetails(manaDairyRequest: ManaDairyRequest): Observable<ManaResponse[]> {
  //   return this.http.post<ManaResponse[]>(this.serviceUrl + '/getAccountDetails' + '.json', manaDairyRequest);
  // }

  getAccountDetails(manaDairyRequest: ManaDairyRequest): Observable<any> {
    const url = `${this.serviceUrl}/getAccountDetails`;
    console.log('url ->', url);
    return this.http.get(url + '.json').pipe(tap(data => console.log(data)));
  }
}
