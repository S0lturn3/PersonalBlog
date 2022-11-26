export class Usuario {
    public id: string = "";
    public NOME: string = "";
    public USUARIO: string = "";
    public SENHA: string = "";

    // #region PUBLIC METHODS

    constructor(id: string, nome: string, usuario: string, senha: string) {
        this.id = id;
        this.NOME = nome;
        this.USUARIO = usuario;
        this.SENHA = senha;
    }

    // #endregion PUBLIC METHODS

}