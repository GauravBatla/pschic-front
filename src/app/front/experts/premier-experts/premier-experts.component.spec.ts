import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremierExpertsComponent } from './premier-experts.component';

describe('PremierExpertsComponent', () => {
  let component: PremierExpertsComponent;
  let fixture: ComponentFixture<PremierExpertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PremierExpertsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PremierExpertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
