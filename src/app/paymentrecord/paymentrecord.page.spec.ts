import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PaymentrecordPage } from './paymentrecord.page';

describe('PaymentrecordPage', () => {
  let component: PaymentrecordPage;
  let fixture: ComponentFixture<PaymentrecordPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentrecordPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PaymentrecordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
