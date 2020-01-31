import { Component, OnInit } from '@angular/core';
import { UpdatebalancePage } from '../updatebalance/updatebalance.page';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paymentrecord',
  templateUrl: './paymentrecord.page.html',
  styleUrls: ['./paymentrecord.page.scss'],
})
export class PaymentrecordPage implements OnInit {

  constructor(public dialog: MatDialog,
    public router: Router) { }

  ngOnInit() {
  }


  updateBalance() {
    const dialogRef = this.dialog.open(UpdatebalancePage, {
      width: '450px',
      // data: send_data
    });
    dialogRef.afterClosed().subscribe(async result => {
      dialogRef.close();
      // this.router.navigate(['/paymentrecord']);
    });
  }
  goBackword() {
    this.router.navigate(['sites']);
  }
}
