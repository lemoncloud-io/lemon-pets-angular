import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteCatpostComponent } from './write-catpost.component';

describe('WriteCatpostComponent', () => {
  let component: WriteCatpostComponent;
  let fixture: ComponentFixture<WriteCatpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WriteCatpostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WriteCatpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
