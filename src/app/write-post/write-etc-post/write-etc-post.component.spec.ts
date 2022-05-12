import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteEtcPostComponent } from './write-etc-post.component';

describe('WriteEtcPostComponent', () => {
  let component: WriteEtcPostComponent;
  let fixture: ComponentFixture<WriteEtcPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WriteEtcPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WriteEtcPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
