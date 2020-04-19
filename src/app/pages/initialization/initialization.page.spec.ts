import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InitializationPage } from './initialization.page';

describe('InitializationPage', () => {
  let component: InitializationPage;
  let fixture: ComponentFixture<InitializationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitializationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InitializationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
