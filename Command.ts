interface Command{
    arg1:Number,
    arg2:Number,
    isFlaged:Boolean,
    flag:Number,
    toHyeong:Function
}

class Mul implements Command{
    arg1: number;
    arg2: number;
    flag: number;
    isFlaged:Boolean;
    toHyeong: Function;
    constructor(a:number,b:number,c?:number){
        this.arg1=a;
        this.arg2=b;
        if(c!==undefined&&c!==null){
            this.isFlaged=true;
            this.flag=c
        }
    }
}
