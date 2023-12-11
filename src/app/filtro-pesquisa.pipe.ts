import { Pipe, PipeTransform } from '@angular/core';
import { Servico } from './servico';

@Pipe({
  name: 'filtroPesquisa', 
  pure: false
})
export class FiltroPesquisaPipe implements PipeTransform {

  transform(listaServicos: Servico[], nomePesquisado: string): Servico[] {
    return listaServicos.filter(function (servico: Servico) {
      return servico.nome?.toLowerCase().includes(nomePesquisado.toLowerCase());
    });
  }

}
