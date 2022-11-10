import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listaperfiles',
  templateUrl: './listaperfiles.component.html',
  styleUrls: ['./listaperfiles.component.css']
})
export class ListaperfilesComponent implements OnInit {
  data:any[]=[]
  @Input() set listUsers(value:any){
    if(value !== undefined){
      this.data=value
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
