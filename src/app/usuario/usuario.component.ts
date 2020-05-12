import { Component, OnInit, Input } from '@angular/core';
import { RomanService } from '../roman.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  number: number;
  result: string;
  userEmail: string = "";
  constructor(private romanServide: RomanService) { }

  ngOnInit(): void {
  }

  convert(){
    this.result = this.romanServide.convert(this.number);
  }
}
