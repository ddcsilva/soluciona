import { Injectable } from '@angular/core';
import { Chamado } from './models/chamado.model';

@Injectable({
  providedIn: 'root',
})
export class ChamadoService {
  private chamados: Chamado[] = [
    {
      id: 1,
      titulo: 'Erro no sistema',
      descricao: 'Não consigo logar',
      status: 'Aberto',
    },
    {
      id: 2,
      titulo: 'Solicitação de acesso',
      descricao: 'Liberar acesso ao módulo X',
      status: 'Fechado',
    },
    {
      id: 3,
      titulo: 'Bug na tela de cadastro',
      descricao: 'Campos não salvam',
      status: 'Aberto',
    },
  ];

  obterChamados(): Chamado[] {
    return this.chamados;
  }
}
