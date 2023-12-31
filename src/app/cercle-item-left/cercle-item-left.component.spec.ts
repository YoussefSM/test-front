import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CercleItemLeftComponent } from './cercle-item-left.component';

describe('CercleItemLeftComponent', () => {
  let component: CercleItemLeftComponent;
  let fixture: ComponentFixture<CercleItemLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CercleItemLeftComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CercleItemLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
