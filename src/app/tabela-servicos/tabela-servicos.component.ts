import { Component } from '@angular/core';
import { Servico } from '../servico';
import { ServicoApiService } from '../servico-api.service';
import { ServicoService } from '../servico.service';

@Component({
  selector: 'app-tabela-servicos',
  templateUrl: './tabela-servicos.component.html',
  styleUrls: ['./tabela-servicos.component.css']
})
export class TabelaServicosComponent {
  listaServicos: Servico[] = [];
  nomePesquisado: string = "";

  constructor(private servicoApiService: ServicoApiService) {
      this.listar();
  }

  listar() {
    this.servicoApiService.getListaServicos().subscribe(
      (servicos) => this.listaServicos = servicos
    )
  }

  deletar(id?: number) {
    this.servicoApiService.deletar(id!).subscribe(servico => {
      console.log('Servico deletado', servico);
      this.listar();
    });
  }
}
