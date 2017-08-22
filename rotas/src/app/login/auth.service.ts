import { Router } from '@angular/router';
import { Injectable, EventEmitter } from '@angular/core';

import { Usuario } from './usuario';

@Injectable()
export class AuthService {
  
  private usuarioAutenticado: boolean = false;

  mostraMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario){
    if (usuario.nome === 'usuario@gmail.com' && usuario.senha === '123456'){
      this.usuarioAutenticado = true;

      this.mostraMenuEmitter.emit(true);

      this.router.navigate(['/']);
    } else{
      this.usuarioAutenticado = false;

      this.mostraMenuEmitter.emit(false);
    }
  }
  
  usuarioEstaAutenticado(){
    return this.usuarioAutenticado;
  }

}
