import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgAfterContentCheckComponent } from './ng-after-content-check.component';

describe('NgAfterContentCheckComponent', () => {
  let component: NgAfterContentCheckComponent;
  let fixture: ComponentFixture<NgAfterContentCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgAfterContentCheckComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgAfterContentCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
