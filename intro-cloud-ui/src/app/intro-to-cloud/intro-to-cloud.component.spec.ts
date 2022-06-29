import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroToCloudComponent } from './intro-to-cloud.component';

describe('IntroToCloudComponent', () => {
  let component: IntroToCloudComponent;
  let fixture: ComponentFixture<IntroToCloudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroToCloudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroToCloudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
