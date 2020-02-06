import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpdateamountrecordPage } from './updateamountrecord.page';

describe('UpdateamountrecordPage', () => {
  let component: UpdateamountrecordPage;
  let fixture: ComponentFixture<UpdateamountrecordPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateamountrecordPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateamountrecordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
