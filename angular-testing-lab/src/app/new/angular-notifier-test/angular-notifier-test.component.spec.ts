import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularNotifierTestComponent } from './angular-notifier-test.component';

describe('AngularNotifierTestComponent', () => {
  let component: AngularNotifierTestComponent;
  let fixture: ComponentFixture<AngularNotifierTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularNotifierTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularNotifierTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
