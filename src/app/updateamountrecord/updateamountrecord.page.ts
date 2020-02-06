import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-updateamountrecord',
  templateUrl: './updateamountrecord.page.html',
  styleUrls: ['./updateamountrecord.page.scss'],
})
export class UpdateamountrecordPage implements OnInit {

  constructor(public menu : MenuController) { }

  ngOnInit() {
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

}