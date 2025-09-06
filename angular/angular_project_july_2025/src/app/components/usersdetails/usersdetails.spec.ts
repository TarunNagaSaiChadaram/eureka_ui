import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Usersdetails } from './usersdetails';

describe('Usersdetails', () => {
  let component: Usersdetails;
  let fixture: ComponentFixture<Usersdetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Usersdetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Usersdetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
