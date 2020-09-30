import { Component, OnInit } from '@angular/core';
import { Usuarios } from '../usuarios-modelo';
import { UsuariosService } from '../usuarios.service';



@Component({
  selector: 'app-usuarios-listar',
  templateUrl: './usuarios-listar.component.html',
  styleUrls: ['./usuarios-listar.component.css']
})
export class UsuariosListarComponent implements OnInit {

  usuarios: Usuarios[] //array
  displayedColumns = ['id', 'nome', 'cpf','email','senha', 'action']
   
  //injetando uma depedência do UsuariosService
  constructor(private usuariosService: UsuariosService) { }

  ngOnInit(): void { //vai trazer os usuários cadastrados
      this.usuariosService.read().subscribe(usuarios =>{
      this.usuarios = usuarios
   })
  }
  

}
