import { Component, OnInit } from '@angular/core';
import { Usuarios } from '../usuarios-modelo';
import { UsuariosService } from '../usuarios.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuarios-deletar',
  templateUrl: './usuarios-deletar.component.html',
  styleUrls: ['./usuarios-deletar.component.css']
})
export class UsuariosDeletarComponent implements OnInit {

  usuarios: Usuarios

  constructor(
              private usuariosService: UsuariosService,
              private router: Router,
              private route: ActivatedRoute
              ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.usuariosService.readById(id).subscribe(usuarios => {
      this.usuarios = usuarios;
    })
  }


  deletarUsuario(): void {
    this.usuariosService.delete(this.usuarios.id).subscribe(() =>{
      this.usuariosService.showMessage ("Usuário excluído com sucesso!");
      this.router.navigate(['/usuarios']);
    })

  }

  cancel(): void{
    this.router.navigate(['/usuarios']);
  }
}
