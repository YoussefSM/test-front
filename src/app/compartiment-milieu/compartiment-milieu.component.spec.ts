import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompartimentMilieuComponent } from './compartiment-milieu.component';

describe('CompartimentMilieuComponent', () => {
  let component: CompartimentMilieuComponent;
  let fixture: ComponentFixture<CompartimentMilieuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompartimentMilieuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompartimentMilieuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
