import { Component, Input, OnInit, OnChanges} from '@angular/core';
import { Coracao } from '../shared/coracao.model';

@Component({
  selector: '[app-chances]',
  templateUrl: './chances.component.html',
  styleUrls: ['./chances.component.css']
})
export class ChancesComponent implements OnInit, OnChanges {

    @Input() public tentativas: number = 0
    
    public coracoes: Coracao[] = [
      new Coracao(true),
      new Coracao(true),
      new Coracao(true)
    ]
  constructor (){

  }
  ngOnInit(){
      
  }
  ngOnChanges(){
    if(this.tentativas !== this.coracoes.length){
      let indice = this.coracoes.length - this.tentativas
      this.coracoes[indice - 1].full = false
    }
  }
        
}
