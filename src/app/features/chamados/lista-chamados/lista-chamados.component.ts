import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { ChamadoService } from '../chamado.service';
import { Chamado } from '../models/chamado.model';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-lista-chamados',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
  templateUrl: './lista-chamados.component.html',
  styleUrl: './lista-chamados.component.scss',
})
export class ListaChamadosComponent {
  colunasExibidas: string[] = ['id', 'titulo', 'descricao', 'status', 'acoes'];
  chamados: Chamado[] = [];
  mostrarFormulario = false;
  formularioChamado: FormGroup;

  constructor(
    private chamadoService: ChamadoService,
    private fb: FormBuilder,
  ) {
    this.chamados = this.chamadoService.obterChamados();

    // Inicializa o formulário
    this.formularioChamado = this.fb.group({
      titulo: ['', Validators.required],
      descricao: ['', Validators.required],
      status: ['Aberto', Validators.required],
    });
  }

  abrirFormulario() {
    this.mostrarFormulario = true;
    this.formularioChamado.reset({ status: 'Aberto' });
  }

  fecharFormulario() {
    this.mostrarFormulario = false;
  }

  salvarChamado() {
    if (this.formularioChamado.valid) {
      const novoChamado: Chamado = {
        id: this.chamados.length + 1,
        ...this.formularioChamado.value,
      };

      this.chamados = [...this.chamados, novoChamado];
      this.fecharFormulario();
    }
  }
}
