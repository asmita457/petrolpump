import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LocationOfAreaPage } from './location-of-area.page';

describe('LocationOfAreaPage', () => {
  let component: LocationOfAreaPage;
  let fixture: ComponentFixture<LocationOfAreaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationOfAreaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LocationOfAreaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
