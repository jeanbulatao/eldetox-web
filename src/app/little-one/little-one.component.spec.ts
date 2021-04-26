import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LittleOneComponent } from './little-one.component';

describe('LittleOneComponent', () => {
  let component: LittleOneComponent;
  let fixture: ComponentFixture<LittleOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LittleOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LittleOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
