import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DiscoverActivityPage } from './discover-activity.page';

describe('DiscoverPage', () => {
  let component: DiscoverActivityPage;
  let fixture: ComponentFixture<DiscoverActivityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscoverActivityPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DiscoverActivityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
