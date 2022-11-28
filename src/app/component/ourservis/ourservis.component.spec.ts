import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurservisComponent } from './ourservis.component';

describe('OurservisComponent', () => {
  let component: OurservisComponent;
  let fixture: ComponentFixture<OurservisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurservisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurservisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
