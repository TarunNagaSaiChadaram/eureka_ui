import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Uploadvideo } from './uploadvideo';

describe('Uploadvideo', () => {
  let component: Uploadvideo;
  let fixture: ComponentFixture<Uploadvideo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Uploadvideo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Uploadvideo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
