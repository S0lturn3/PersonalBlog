import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from './models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private readonly baseURL = 'http://localhost:3000/usuarios';

  constructor(private _httpClient: HttpClient) { }

  // #region SERVICES

  // #region GET

  /**
   * Realiza um GET em todos os usuários existentes no banco.
   * @returns Lista de usuários
   */
  public getUsuarios(): Observable<Usuario[]> {
    return this._httpClient
      .get<Usuario[]>(this.baseURL);
  }


  /**
   * Realiza um GET em todos os usuários, retornando apenas o registro que bata com os filtros informados.
   * @param nome Nome do usuário
   * @param usuario Username do usuário
   * @param senha Senha do usuário
   * @returns Usuário encontrado com base nos filtros informados
   */
  public getUsuario(nome: string, usuario: string, senha: string): Observable<Usuario> {
    const params = new HttpParams()
      .set('nome', nome)
      .set('usuario', usuario)
      .set('senha', senha)

    return this._httpClient
      .get<Usuario>(this.baseURL, { 'params': params })
  }

  // #endregion GET

  // #region POST

  /**
   * Realiza um POST que cria um usuário novo e o salva no banco.
   * @param usuario Objeto do usuário novo que será enviado ao banco
   * @returns Usuário recém criado
   */
  public createUsuario(usuario: Usuario): Observable<Usuario> {
    return this._httpClient
      .post<Usuario>(this.baseURL, usuario)
  }

  // #endregion POST

  // #endregion SERVICES

}
