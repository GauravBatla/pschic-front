import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenChangeComponent } from './screen-change.component';

describe('ScreenChangeComponent', () => {
  let component: ScreenChangeComponent;
  let fixture: ComponentFixture<ScreenChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenChangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
