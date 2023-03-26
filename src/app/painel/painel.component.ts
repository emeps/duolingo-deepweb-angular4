import { Component, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Frase } from '../shared/frase.model';
import { FRASES } from '../mock/frase.mock';

@Component({
  selector: '[app-painel]',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent {
  public frases: Frase[] = FRASES
  public instructions: string = 'Traduza a frase aqui'
  public resposta: string = '';
  public rodada: number = 0;
  public rodadeFrase: Frase = {frasePT:'', fraseEng:''}
  public progresso: number = 0

  public tenta:number = 3

  @Output() public endGaming: EventEmitter<string> = new EventEmitter()

  constructor() {
    this.setRodada()
  }
  public atualizarResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value
  }
  public verificarResposta(): void {
    if (this.rodadeFrase.frasePT == this.resposta) {
      this.rodada++
      this.progresso = this.progresso + (100/this.frases.length)
      if(this.rodada  === 4){
        this.endGaming.emit('Vitória!')
      }
      this.setRodada()
    } else {
      this.tenta--
      if(this.tenta === -1){
        this.endGaming.emit('Perdeu!')
      }
    }
  }
  public setRodada():void{
    this.rodadeFrase = this.frases[this.rodada]
    this.resposta = ''
  }
  OnDestroy(){

  }
}
