import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formassignment } from './formassignment';

describe('Formassignment', () => {
  let component: Formassignment;
  let fixture: ComponentFixture<Formassignment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Formassignment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Formassignment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
