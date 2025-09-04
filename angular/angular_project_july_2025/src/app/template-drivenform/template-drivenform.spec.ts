import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenform } from './template-drivenform';

describe('TemplateDrivenform', () => {
  let component: TemplateDrivenform;
  let fixture: ComponentFixture<TemplateDrivenform>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateDrivenform]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateDrivenform);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
