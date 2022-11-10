import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-detalleperfil',
  templateUrl: './detalleperfil.component.html',
  styleUrls: ['./detalleperfil.component.css']
})
export class DetalleperfilComponent implements OnInit {
  username: string;
  
  constructor(
    private servicio: UsuarioService,
    private router: ActivatedRoute
  ) { 
    this.username = this.router.snapshot.paramMap.get('user') as string;
  }

  perfil() {
    this.servicio.getperfil(this.username).subscribe(
      (resp:any) => {
        console.log(resp)
      },
      () => { })
  }

  ngOnInit(): void {
    this.perfil()
  }

}
