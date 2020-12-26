import { Component } from '@angular/core';
import {TestService} from './core/service/test.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to Quick Shop';
  result: any;

  constructor(private testService: TestService){
  }

  sayHello(): void {
    // this.result = 'loading...';
    // this.http.get('/api/hello-world').subscribe(results => this.result = results);
    this.testService.getCustomers().subscribe( (res) => {
      this.result = res.firstName;
    });
  }
}
