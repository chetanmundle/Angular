import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaildComponent } from './chaild.component';

describe('ChaildComponent', () => {
  let component: ChaildComponent;
  let fixture: ComponentFixture<ChaildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChaildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChaildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
