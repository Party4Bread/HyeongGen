abstract class Command{
    arg1:number;
    arg2:number;
    isFlaged:boolean;
    flag:number;
    constructor(a:number,b:number,c?:number){
        this.arg1=a;
        this.arg2=b;
        if(c!==undefined&&c!==null){
            this.isFlaged=true;
            this.flag=c;
        }
        else{
            this.isFlaged=false;
            this.flag=0;
        }
    }
    abstract toHyeong():string;
}
