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

  getBalanceDetail = [

    {
      "date": "01/02/2020",
      "credited": "2000",
      "debited": "2500",
     
    }, {
      "date": "01/02/2020",
      "credited": "2000",
      "debited": "2500",
     
    },
    {
      "date": "01/02/2020",
      "credited": "2000",
      "debited": "2500",
     
    },
    {
      "date": "01/02/2020",
      "credited": "2000",
      "debited": "2500",
     
    },
    {
      "date": "01/02/2020",
      "credited": "2000",
      "debited": "2500",
     
    },
    {
      "date": "01/02/2020",
      "credited": "2000",
      "debited": "2500",
     
    },
    {
      "date": "01/02/2020",
      "credited": "2000",
      "debited": "2500",
     
    },
    {
      "date": "01/02/2020",
      "credited": "2000",
      "debited": "2500",
     
    },
    {
      "date": "01/02/2020",
      "credited": "2000",
      "debited": "2500",
     
    },
    {
      "date": "01/02/2020",
      "credited": "2000",
      "debited": "2500",
     
    },
    {
      "date": "01/02/2020",
      "credited": "2000",
      "debited": "2500",
     
    },
    {
      "date": "01/02/2020",
      "credited": "2000",
      "debited": "2500",
     
    },
    {
      "date": "01/02/2020",
      "credited": "2000",
      "debited": "2500",
     
    },
    {
      "date": "01/02/2020",
      "credited": "2000",
      "debited": "2500",
     
    },
    {
      "date": "01/02/2020",
      "credited": "2000",
      "debited": "2500",
     
    },
    {
      "date": "01/02/2020",
      "credited": "2000",
      "debited": "2500",
     
    },
    {
      "date": "01/02/2020",
      "credited": "2000",
      "debited": "2500",
     
    },
    {
      "date": "01/02/2020",
      "credited": "2000",
      "debited": "2500",
     
    },
    {
      "date": "01/02/2020",
      "credited": "2000",
      "debited": "2500",
     
    },
    {
      "date": "01/02/2020",
      "credited": "2000",
      "debited": "2500",
     
    },
    {
      "date": "01/02/2020",
      "credited": "2000",
      "debited": "2500",
     
    },
    {
      "date": "01/02/2020",
      "credited": "2000",
      "debited": "2500",
     
    },
    {
      "date": "01/02/2020",
      "credited": "2000",
      "debited": "2500",
     
    },
    {
      "date": "01/02/2020",
      "credited": "2000",
      "debited": "2500",
     
    },
    {
      "date": "01/02/2020",
      "credited": "2000",
      "debited": "2500",
     
    },
    {
      "date": "01/02/2020",
      "credited": "2000",
      "debited": "2500",
     
    },
    {
      "date": "01/02/2020",
      "credited": "2000",
      "debited": "2500",
     
    },
    {
      "date": "01/02/2020",
      "credited": "2000",
      "debited": "2500",
     
    },
    {
      "date": "01/02/2020",
      "credited": "2000",
      "debited": "2500",
     
    },
    {
      "date": "01/02/2020",
      "credited": "2000",
      "debited": "2500",
     
    },
    {
      "date": "01/02/2020",
      "credited": "2000",
      "debited": "2500",
     
    },
    {
      "date": "01/02/2020",
      "credited": "2000",
      "debited": "2500",
     
    }
  ]
  constructor(public dialog: MatDialog,
    public router: Router) { }

  ngOnInit() {
  }


  updateBalance() {
    const dialogRef = this.dialog.open(UpdatebalancePage, {
      width: '450px',
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
