import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificationPorteComponent } from './verification-porte.component';

describe('VerificationPorteComponent', () => {
  let component: VerificationPorteComponent;
  let fixture: ComponentFixture<VerificationPorteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerificationPorteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerificationPorteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
