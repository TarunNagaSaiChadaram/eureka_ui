import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Empcomp } from './empcomp';

describe('Empcomp', () => {
  let component: Empcomp;
  let fixture: ComponentFixture<Empcomp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Empcomp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Empcomp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
