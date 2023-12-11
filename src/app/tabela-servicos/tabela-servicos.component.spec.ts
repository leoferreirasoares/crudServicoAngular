import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaServicosComponent } from './tabela-servicos.component';

describe('TabelaServicosComponent', () => {
  let component: TabelaServicosComponent;
  let fixture: ComponentFixture<TabelaServicosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabelaServicosComponent]
    });
    fixture = TestBed.createComponent(TabelaServicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
