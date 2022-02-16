import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryListingComponent } from './history-listing.component';

describe('HistoryListingComponent', () => {
  let component: HistoryListingComponent;
  let fixture: ComponentFixture<HistoryListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
