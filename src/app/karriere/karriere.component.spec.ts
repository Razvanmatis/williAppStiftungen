import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KarriereComponent } from './karriere.component';

describe('KarriereComponent', () => {
  let component: KarriereComponent;
  let fixture: ComponentFixture<KarriereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KarriereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KarriereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
