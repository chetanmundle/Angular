import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildOnDestroyComponent } from './child-on-destroy.component';

describe('ChildOnDestroyComponent', () => {
  let component: ChildOnDestroyComponent;
  let fixture: ComponentFixture<ChildOnDestroyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildOnDestroyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildOnDestroyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
