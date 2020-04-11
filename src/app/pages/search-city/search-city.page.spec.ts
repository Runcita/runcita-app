import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchCityPage } from './search-city.page';

describe('SearchCityPage', () => {
  let component: SearchCityPage;
  let fixture: ComponentFixture<SearchCityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchCityPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchCityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
