import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetmonetComponent } from './netmonet.component';

describe('NetmonetComponent', () => {
  let component: NetmonetComponent;
  let fixture: ComponentFixture<NetmonetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetmonetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NetmonetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
