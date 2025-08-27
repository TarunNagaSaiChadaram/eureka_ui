import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Httpclientdemo } from './httpclientdemo';

describe('Httpclientdemo', () => {
  let component: Httpclientdemo;
  let fixture: ComponentFixture<Httpclientdemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Httpclientdemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Httpclientdemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
