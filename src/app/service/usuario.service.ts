import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    private httpClient:HttpClient
  ) { }

  getuser(username:string){
    return this.httpClient.get(environment.url+`search/users?q=${username}`)
  }
  getperfil(username:string){
    return this.httpClient.get(environment.url+`users/${username}`)
  }
}
