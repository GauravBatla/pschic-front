import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItimepacksComponent } from './itimepacks.component';

describe('ItimepacksComponent', () => {
  let component: ItimepacksComponent;
  let fixture: ComponentFixture<ItimepacksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItimepacksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItimepacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
