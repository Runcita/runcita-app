import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RunningLevelPage } from './running-level.page';

describe('RunningLevelPage', () => {
  let component: RunningLevelPage;
  let fixture: ComponentFixture<RunningLevelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunningLevelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RunningLevelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
