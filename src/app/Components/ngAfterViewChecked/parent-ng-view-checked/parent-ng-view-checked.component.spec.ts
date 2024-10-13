import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentNgViewCheckedComponent } from './parent-ng-view-checked.component';

describe('ParentNgViewCheckedComponent', () => {
  let component: ParentNgViewCheckedComponent;
  let fixture: ComponentFixture<ParentNgViewCheckedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentNgViewCheckedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentNgViewCheckedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
