import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDirectoryComponent } from './get-directory.component';

describe('GetDirectoryComponent', () => {
  let component: GetDirectoryComponent;
  let fixture: ComponentFixture<GetDirectoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetDirectoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetDirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
