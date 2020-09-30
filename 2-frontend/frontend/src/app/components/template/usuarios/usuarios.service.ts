import { Injectable } from '@angular/core';
import { MatSnackBar} from '@angular/material/snack-bar'; 
import { HttpClient } from '@angular/common/http';
import { Usuarios } from './usuarios-modelo';
import { Observable } from 'rxjs';

@Injectable({ //essa classe pode ser injetada em outras classes
  providedIn: 'root'
})
export class UsuariosService {
  getUsuarioList() {
    throw new Error("Method not implemented.");
  }

  baseUrl = "http://localhost:8080/api/usuarios"

  constructor(private snackBar: MatSnackBar,
              private  http: HttpClient) { 

  }

  showMessage(msg: string): void { //método de tempo de duração
      this.snackBar.open(msg,'X', {//configurações relacionadas ao snackbar
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
      })
  }

  //métodos CRUD que conversam com o BACKEND
  //Observable retorna um método generics
  create(usuario: Usuarios): Observable<Usuarios>{ 
    return this.http.post<Usuarios>(this.baseUrl, usuario)

  }

  read(): Observable<Usuarios[]> {
    return this.http.get<Usuarios[]>(this.baseUrl)
  }

  readById(id: string): Observable<Usuarios>{
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Usuarios>(url)
  }

  update(usuarios: Usuarios): Observable<Usuarios>{
    const url = `${this.baseUrl}/${usuarios.id}`
    return this.http.put<Usuarios>(url, usuarios)
  }

  delete(id: number): Observable<Usuarios>{
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Usuarios>(url);
  }
}
