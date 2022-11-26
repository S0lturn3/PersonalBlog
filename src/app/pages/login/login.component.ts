import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Usuario } from './models/Usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(
    private _loginService: LoginService
  ) { }

  ngOnInit(): void {
    this.getUsuarios()
  }


  // #region PROPERTIES
  public usuarios: Usuario[] = [];

  // #endregion PROPERTIES


  // #region FORM

  // #region FORM DATA
  // [...]
  // #endregion FORM DATA

  // #region FORM BUILDER
  // [...]
  // #endregion FORM BUILDER

  // #endregion FORM


  // #region SERVICES

  // #region GET
  public getUsuarios() {
    this._loginService.getUsuarios().subscribe(
      response => {
        console.table(response)
        this.usuarios = response
      }
    )
  }
  // #endregion GET

  // #region CREATE
  public createUsuario() {
    let usuario: Usuario = {
      id: crypto.randomUUID(),
      NOME: "Criado por tela3",
      USUARIO: "Criado por tela3",
      SENHA: "12345"
    }

    this._loginService.createUsuario(usuario).subscribe(
      response => {
        console.log("Inserido com sucesso")
        this.getUsuarios()
      }
    )
  }
  // #endregion CREATE

  // #endregion SERVICES


  // #region UTILS
  // [...]
  // #endregion UTILS


  // #region MODALS
  // [...]
  // #endregion MODALS

}
