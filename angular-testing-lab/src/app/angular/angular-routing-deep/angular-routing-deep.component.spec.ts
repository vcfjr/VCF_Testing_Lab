import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularRoutingDeepComponent } from './angular-routing-deep.component';

describe('AngularRoutingDeepComponent', () => {
  let component: AngularRoutingDeepComponent;
  let fixture: ComponentFixture<AngularRoutingDeepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularRoutingDeepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularRoutingDeepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
