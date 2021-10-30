import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UeberUnsComponent } from './ueber-uns.component';

describe('MainComponentComponent', () => {
  let component: UeberUnsComponent;
  let fixture: ComponentFixture<UeberUnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UeberUnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UeberUnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
