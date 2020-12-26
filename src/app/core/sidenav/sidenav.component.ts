import {Component, OnInit, Output, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {User} from '../model/User';
import {RegisterComponent} from '../register/register.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor(public dialog: MatDialog) {
  }

  @ViewChild('sidenav', {static: false}) sidenav: MatSidenav;
  reason = '';
  closeResult = '';
  selectedValue: string;
  ngOnInit(): void {
  }

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }

  openSignupDialog() {
    const dialogRef = this.dialog.open(RegisterComponent, {
      width: '100%',
      height: '80%'
    });
  }
}
