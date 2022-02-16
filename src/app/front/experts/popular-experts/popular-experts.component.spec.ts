import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularExpertsComponent } from './popular-experts.component';

describe('PopularExpertsComponent', () => {
  let component: PopularExpertsComponent;
  let fixture: ComponentFixture<PopularExpertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopularExpertsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularExpertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
