import { Component } from '@angular/core';
import { Servico } from '../servico';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicoApiService } from '../servico-api.service';
import { ServicoService } from '../servico.service';

@Component({
  selector: 'app-form-servicos',
  templateUrl: './form-servicos.component.html',
  styleUrls: ['./form-servicos.component.css']
})
export class FormServicosComponent {
  servico = new Servico();
  id!: number;
  botaoAcao = "Cadastrar";

  constructor(
    private servicoAPIService: ServicoApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.id = +this.route.snapshot.params['id'];    
    if(this.id) {
      this.botaoAcao = 'Editar';
      this.servicoAPIService.buscarPorId(this.id).subscribe(servico => {
        this.servico = servico;
      });
    }
  }

  salvar() {
    if(this.id) {
      this.servicoAPIService.editar(this.id, this.servico).subscribe(prod => {              
        this.servico = prod;
        alert(this.servico.nome+" editado com sucesso!");
      });      
    }
    else {
      this.servicoAPIService.inserir(this.servico).subscribe(
        (servicoI) => {
          this.servico = new Servico();
          alert(servicoI.id+" cadastrado com sucesso!");
        }
      );
    }
  }

  voltar() {
    this.router.navigate(['/tabela']);
  }
}
