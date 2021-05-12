import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadImgTestComponent } from './upload-img-test.component';

describe('UploadImgTestComponent', () => {
  let component: UploadImgTestComponent;
  let fixture: ComponentFixture<UploadImgTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadImgTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadImgTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
