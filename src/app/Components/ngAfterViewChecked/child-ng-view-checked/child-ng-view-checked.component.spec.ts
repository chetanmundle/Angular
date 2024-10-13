import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildNgViewCheckedComponent } from './child-ng-view-checked.component';

describe('ChildNgViewCheckedComponent', () => {
  let component: ChildNgViewCheckedComponent;
  let fixture: ComponentFixture<ChildNgViewCheckedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildNgViewCheckedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildNgViewCheckedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
