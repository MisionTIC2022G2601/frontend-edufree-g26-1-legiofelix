import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUsuariosPorGrupoComponent } from './admin-usuarios-por-grupo.component';

describe('AdminUsuariosPorGrupoComponent', () => {
  let component: AdminUsuariosPorGrupoComponent;
  let fixture: ComponentFixture<AdminUsuariosPorGrupoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminUsuariosPorGrupoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUsuariosPorGrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
