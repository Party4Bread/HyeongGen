/// <reference path="../Command.ts" />
namespace Hyasm{
    export class Halt extends Command{
        constructor(){
            super(1,1,'','','','');
        }
        toHyeong(){
            return "형흑.흣"//Mul(1,0),DupMov(1,1),NegAcc(1,0)
        }
    }
}