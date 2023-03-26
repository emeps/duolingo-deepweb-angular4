export class Coracao {
    constructor(
        public full: boolean,
        public urlFull:string = './assets/coracao_cheio.png', 
        public urlFill:string = './assets/coracao_vazio.png', 
        ) {
    }
    
    public displayCoracao(): string{
        if(this.full){
            return this.urlFull
        }else{
            return this.urlFill
        }
    }
}