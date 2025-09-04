import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelDrivenform } from './model-drivenform';

describe('ModelDrivenform', () => {
  let component: ModelDrivenform;
  let fixture: ComponentFixture<ModelDrivenform>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModelDrivenform]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelDrivenform);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
