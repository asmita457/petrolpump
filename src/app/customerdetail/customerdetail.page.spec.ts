import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CustomerdetailPage } from './customerdetail.page';

describe('CustomerdetailPage', () => {
  let component: CustomerdetailPage;
  let fixture: ComponentFixture<CustomerdetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerdetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerdetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
