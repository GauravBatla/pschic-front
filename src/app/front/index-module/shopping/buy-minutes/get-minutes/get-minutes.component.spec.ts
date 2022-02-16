import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetMinutesComponent } from './get-minutes.component';

describe('GetMinutesComponent', () => {
  let component: GetMinutesComponent;
  let fixture: ComponentFixture<GetMinutesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetMinutesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetMinutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
