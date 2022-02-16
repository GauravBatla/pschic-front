import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertsListingComponent } from './experts-listing.component';

describe('ExpertsListingComponent', () => {
  let component: ExpertsListingComponent;
  let fixture: ComponentFixture<ExpertsListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpertsListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertsListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
