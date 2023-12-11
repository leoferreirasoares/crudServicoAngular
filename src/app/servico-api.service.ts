import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Servico } from './servico';
const httpOptions = { 
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

const BASE_API = "http://localhost:3000/servicos";

@Injectable({
  providedIn: 'root'
})
export class ServicoApiService {

  constructor(private http: HttpClient) { }

  getListaServicos(): Observable<Servico[]> {
    return this.http.get<Servico[]>(BASE_API);
  }

  inserir(servico: Servico): Observable<Servico>{
    return this.http.post<Servico>(BASE_API, servico, httpOptions);
  }

  buscarPorId(id: number): Observable<Servico> {
    const uri = `${BASE_API}/${id}`;    
    return this.http.get<Servico>(uri);
  }

  editar(id: number, servico: Servico): Observable<Servico> {
    const uri = `${BASE_API}/${id}`; 
    return this.http.put(uri, servico, httpOptions);  
  }

  deletar(id?: number) {
    const uri = `${BASE_API}/${id}`;    
    return this.http.delete<Servico>(uri);
  }
}
