import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SteckbriefComponent } from './steckbrief.component';

describe('SteckbriefComponent', () => {
  let component: SteckbriefComponent;
  let fixture: ComponentFixture<SteckbriefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SteckbriefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SteckbriefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
