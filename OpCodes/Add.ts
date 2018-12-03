//WIP
class Add implements Command{
    arg1: number;
    arg2: number;
    flag=0;
    isFlaged=false;
    constructor(a:number,b:number,c?:number){
        this.arg1=a;
        this.arg2=b;
        if(c!==undefined&&c!==null){
            this.isFlaged=true;
            this.flag=c
        }
    }
    toHyeong():string {
        let res="";
        if(this.arg1===0){
            this.arg1=this.arg2;
            this.arg2=0;
        }
        if(this.arg1<2){
            res+="형";
        }else{
            res+="혀"+"어".repeat(this.arg1-2)+"엉";
        }
        res+=".".repeat(this.arg2);
        return res
    }
}
