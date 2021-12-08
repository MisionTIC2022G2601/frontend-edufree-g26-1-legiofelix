import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProgramasAcademicosComponent } from './admin-programas-academicos.component';

describe('AdminProgramasAcademicosComponent', () => {
  let component: AdminProgramasAcademicosComponent;
  let fixture: ComponentFixture<AdminProgramasAcademicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminProgramasAcademicosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProgramasAcademicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
