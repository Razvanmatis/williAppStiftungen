import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StiftungenComponent } from './stiftungen.component';

describe('StiftungenComponent', () => {
  let component: StiftungenComponent;
  let fixture: ComponentFixture<StiftungenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StiftungenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StiftungenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
