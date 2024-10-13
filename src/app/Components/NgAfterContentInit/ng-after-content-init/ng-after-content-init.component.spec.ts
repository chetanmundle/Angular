import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgAfterContentInitComponent } from './ng-after-content-init.component';

describe('NgAfterContentInitComponent', () => {
  let component: NgAfterContentInitComponent;
  let fixture: ComponentFixture<NgAfterContentInitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgAfterContentInitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgAfterContentInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
