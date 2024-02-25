import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundResearchComponent } from './background-research.component';

describe('BackgroundResearchComponent', () => {
  let component: BackgroundResearchComponent;
  let fixture: ComponentFixture<BackgroundResearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackgroundResearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackgroundResearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
