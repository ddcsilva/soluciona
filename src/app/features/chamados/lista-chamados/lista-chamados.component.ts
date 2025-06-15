import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { ChamadoService } from '../chamado.service';
import { Chamado } from '../models/chamado.model';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-lista-chamados',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule, MatIconModule],
  templateUrl: './lista-chamados.component.html',
  styleUrl: './lista-chamados.component.scss',
})
export class ListaChamadosComponent {
  colunasExibidas: string[] = ['id', 'titulo', 'descricao', 'status', 'acoes'];
  chamados: Chamado[] = [];

  constructor(private chamadoService: ChamadoService) {
    this.chamados = this.chamadoService.obterChamados();
  }
}
