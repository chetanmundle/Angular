import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgOnInitHookComponent } from './ng-on-init-hook.component';

describe('NgOnInitHookComponent', () => {
  let component: NgOnInitHookComponent;
  let fixture: ComponentFixture<NgOnInitHookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgOnInitHookComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgOnInitHookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
