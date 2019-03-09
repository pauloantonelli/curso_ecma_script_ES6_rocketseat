export class Usuario {
  constructor(email, senha) {
      this.email = email; this.senha = senha;
  }
  get verEmail() {
      return this._email;
  }
  set definirEmail(email) {
    this._email = email;
  }
  get verSenha() {
      return this._senha;
  }
  set definirSenha(senha) {
      this._senha = senha;
  }
  isAdmin() {
    return this.admin === true;
  }
}