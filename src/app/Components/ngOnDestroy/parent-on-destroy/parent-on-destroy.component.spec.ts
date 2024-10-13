import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentOnDestroyComponent } from './parent-on-destroy.component';

describe('ParentOnDestroyComponent', () => {
  let component: ParentOnDestroyComponent;
  let fixture: ComponentFixture<ParentOnDestroyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentOnDestroyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentOnDestroyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
