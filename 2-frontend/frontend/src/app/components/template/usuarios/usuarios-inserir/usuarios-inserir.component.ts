import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../usuarios.service';
import { Router } from '@angular/router';
import { Usuarios } from '../usuarios-modelo';


@Component({
  selector: 'app-usuarios-inserir',
  templateUrl: './usuarios-inserir.component.html',
  styleUrls: ['./usuarios-inserir.component.css']
})
export class UsuariosInserirComponent implements OnInit {

  usuarios: Usuarios = {
    nome: '',
    cpf: '',
    email: '',
    senha: '',
  }

  constructor(private usuariosService: UsuariosService,
              private router: Router ) { //Injeção de Dependências

  }

  ngOnInit(): void {
  }

  inserirUsuario():void {
      this.usuariosService.create(this.usuarios).subscribe(() => {
      this.usuariosService.showMessage('Usuário inserido com sucesso!')
      this.router.navigate(['/usuarios'])
    })
  }

  cancel(): void{
      this.router.navigate(['/usuarios'])
  }
}
