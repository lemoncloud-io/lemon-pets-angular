import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteDogpostComponent } from './write-dogpost.component';

describe('WriteDogpostComponent', () => {
  let component: WriteDogpostComponent;
  let fixture: ComponentFixture<WriteDogpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WriteDogpostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WriteDogpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
