/// <reference path="../Command.ts" />
class Putchar extends Command{
    constructor(a:number){
        super(a,1,'','','','');
    }
    toHyeong(){
        return "형흑.흣"//Mul(1,0),DupMov(1,1),NegAcc(1,0)
    }
}