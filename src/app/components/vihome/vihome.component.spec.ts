import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VihomeComponent } from './vihome.component';

describe('VihomeComponent', () => {
  let component: VihomeComponent;
  let fixture: ComponentFixture<VihomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VihomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VihomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
