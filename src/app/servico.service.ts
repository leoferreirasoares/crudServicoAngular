import { Injectable } from '@angular/core';
import { Servico } from './servico';

@Injectable({
  providedIn: 'root'
})
export class ServicoService {
  idGen = 6;
  
  constructor() { }
  private generateId() {
    return this.idGen++;
  }
 
}
