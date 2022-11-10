import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  users: any[]=[];
  formSearch: FormGroup
  constructor(
    private fb: FormBuilder,
    private servicio: UsuarioService
  ) {
    this.formSearch = this.fb.group({
      username: [null, [Validators.required]]
    })
  }

  search() {
    if (this.formSearch.invalid) {
      return
    }
    this.servicio.getuser(this.formSearch.value.username).subscribe(
      (resp:any) => {
        this.users = resp.items;
      },
      () => { },
      () => { })
  }

  ngOnInit(): void {
  }

}
