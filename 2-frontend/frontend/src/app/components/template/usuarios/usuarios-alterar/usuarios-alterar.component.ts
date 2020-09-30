import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../usuarios.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Usuarios } from '../usuarios-modelo';

@Component({
  selector: 'app-usuarios-alterar',
  templateUrl: './usuarios-alterar.component.html',
  styleUrls: ['./usuarios-alterar.component.css']
})
export class UsuariosAlterarComponent implements OnInit {

  usuarios: Usuarios;

  constructor(private usuariosService: UsuariosService,
              private router: Router,
              private route: ActivatedRoute) { }


  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.usuariosService.readById(id).subscribe(usuarios => {
    this.usuarios = usuarios;
    });
  }

  alterarUsuario(): void{
    this.usuariosService.update(this.usuarios).subscribe(() => {
      this.usuariosService.showMessage('Usuário atualizado com sucesso!')
      this.router.navigate(["/usuarios"]);
    })
  }

  cancel(): void{
    this.router.navigate(['/usuarios']);

  }
}
