import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreferedExpertsComponent } from './prefered-experts.component';

describe('PreferedExpertsComponent', () => {
  let component: PreferedExpertsComponent;
  let fixture: ComponentFixture<PreferedExpertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreferedExpertsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreferedExpertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
