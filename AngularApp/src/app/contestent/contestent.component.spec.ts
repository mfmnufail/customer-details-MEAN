import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContestentComponent } from './contestent.component';

describe('ContestentComponent', () => {
  let component: ContestentComponent;
  let fixture: ComponentFixture<ContestentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContestentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContestentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
