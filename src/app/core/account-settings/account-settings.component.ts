import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../service/user.service';
import {ManaDairyRequest} from '../model/ManaDairyRequest';
import {ManaResponse} from '../model/ManaResponse';
import {MatAccordion} from '@angular/material/expansion';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html'
})
export class AccountSettingsComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;

  manaDairyReq: ManaDairyRequest;
  userAccountDetails: any;
  constructor(private userService: UserService) {
    this.manaDairyReq = new ManaDairyRequest();
  }

  ngOnInit(): void {
    this.getAccountDetails();
  }

  getAccountDetails() {
    this.userService.getAccountDetails(this.manaDairyReq).subscribe( (data) => {
      console.log('response :', data);
      this.userAccountDetails = data.ManaResponse;
    });
  }

  updatePersonalDetails() {
    console.log('personal details updated successfully');
  }

}
