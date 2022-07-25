import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  text = 'Breno Lucena';
  imageUrl = 'http://picsum.photos/300/300';
  imageDesc = 'Isto é uma imagem';
  buttonText = 'Clique aqui';
  textRed = 'textred';
  bgColor = 'green';
  fontSize = '20px';
  widthImg = 600;


  constructor() { }

  ngOnInit(): void {
  }

  retornaNome() {
    return this.text;
  }

  clicou(value: any) {
    //this.text = 'Patricia Marinucci';
    console.log('clicou aqui', value);    
  }

}
