import { Component, OnInit } from '@angular/core'; 
import { Router }  from '@angular/router'

@Component({
  selector: 'app-usuarios-crud',
  templateUrl: './usuarios-crud.component.html',
  styleUrls: ['./usuarios-crud.component.css']
})
export class UsuariosCrudComponent implements OnInit {

  constructor(private router: Router) { //construtor de router, com a rota sendo injetada pelo Angular

  }

  ngOnInit(): void {
  }

  navegateToUsuariosInserir (): void {
    this.router.navigate(['/usuarios/inserir'])

  }

}
