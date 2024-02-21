import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalDesignComponent } from './final-design.component';

describe('FinalDesignComponent', () => {
  let component: FinalDesignComponent;
  let fixture: ComponentFixture<FinalDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalDesignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinalDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
