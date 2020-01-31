import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InternetNotConnectedPage } from './internet-not-connected.page';

describe('InternetNotConnectedPage', () => {
  let component: InternetNotConnectedPage;
  let fixture: ComponentFixture<InternetNotConnectedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternetNotConnectedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InternetNotConnectedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
