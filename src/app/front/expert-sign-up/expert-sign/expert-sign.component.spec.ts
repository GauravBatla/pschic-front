import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertSignComponent } from './expert-sign.component';

describe('ExpertSignComponent', () => {
  let component: ExpertSignComponent;
  let fixture: ComponentFixture<ExpertSignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpertSignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertSignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
