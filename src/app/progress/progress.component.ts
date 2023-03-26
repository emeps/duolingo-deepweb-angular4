import { Component, Input } from '@angular/core';

@Component({
  selector: '[app-progress]',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent {
  @Input('progress') public progresso: number = 0
  constructor(){

  }
}
