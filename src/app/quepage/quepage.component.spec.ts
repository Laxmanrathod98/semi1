import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuepageComponent } from './quepage.component';

describe('QuepageComponent', () => {
  let component: QuepageComponent;
  let fixture: ComponentFixture<QuepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
