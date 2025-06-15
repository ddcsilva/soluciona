import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';

export interface Chamado {
  id: number;
  titulo: string;
  descricao: string;
  status: 'Aberto' | 'Fechado';
}

const CHAMADOS_MOCK: Chamado[] = [
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

@Component({
  selector: 'app-lista-chamados',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './lista-chamados.component.html',
  styleUrl: './lista-chamados.component.scss',
})
export class ListaChamadosComponent {
  colunasExibidas: string[] = ['id', 'titulo', 'descricao', 'status'];
  chamados = CHAMADOS_MOCK;
}
