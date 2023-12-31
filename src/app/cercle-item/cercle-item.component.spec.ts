import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CercleItemComponent } from './cercle-item.component';

describe('CercleItemComponent', () => {
  let component: CercleItemComponent;
  let fixture: ComponentFixture<CercleItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CercleItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CercleItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
