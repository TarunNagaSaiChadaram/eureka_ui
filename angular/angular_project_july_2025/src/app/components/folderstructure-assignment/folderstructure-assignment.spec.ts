import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FolderstructureAssignment } from './folderstructure-assignment';

describe('FolderstructureAssignment', () => {
  let component: FolderstructureAssignment;
  let fixture: ComponentFixture<FolderstructureAssignment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FolderstructureAssignment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FolderstructureAssignment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
