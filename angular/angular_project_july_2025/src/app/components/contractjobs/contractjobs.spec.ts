import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contractjobs } from './contractjobs';

describe('Contractjobs', () => {
  let component: Contractjobs;
  let fixture: ComponentFixture<Contractjobs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contractjobs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Contractjobs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
