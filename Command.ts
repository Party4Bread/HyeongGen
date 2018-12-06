namespace Hyasm{
    export abstract class Command{
        arg1:number;
        arg2:number;
        isFlaged:boolean;
        flag:number;
        onechar:string;
        startchar:string;
        middlechar:string;
        endchar:string;
        constructor(a:number,b:number,one:string,st:string,mid:string,ed:string,c?:number){
            if (a===0)throw "첫번째 인자 값은 0일수 없습니다.";
            this.arg1=a;
            this.arg2=b;
            this.onechar=one;
            this.startchar=st;
            this.middlechar=mid;
            this.endchar=ed;
            if(c!==undefined&&c!==null){
                this.isFlaged=true;
                this.flag=c;
            }
            else{
                this.isFlaged=false;
                this.flag=0;
            }
        }
        toHyeong():string{
            let res="";
            if(this.arg1===0){
                this.arg1=this.arg2;
                this.arg2=0;
            }
            if(this.arg1<2){
                res+=this.onechar;
            }else{
                res+=this.startchar+this.middlechar.repeat(this.arg1-2)+this.endchar;
            }
            res+=".".repeat(this.arg2);
            return res
        }
        //abstract toHyeong():string;
    }
}
