class InvAccMul extends Command{
    arg1: number;
    arg2: number;
    flag=0;
    isFlaged=false;
    /**
     * 현재 스택의 위쪽 a개의 값을 역수로 바꾸고 그 곱을 b스택에 저장합니다
     * @param  {number} a 부호를 바꿀 값의 수
     * @param  {number} b 저장할 스택 번호
     * @param  {number} c? Flag번호
     */
    constructor(a:number,b:number,c?:number){
        super(a,b,c);
    }
    toHyeong():string {
        let res="";
        if(this.arg1===0){
            this.arg1=this.arg2;
            this.arg2=0;
        }
        if(this.arg1<2){
            res+="흡";
        }else{
            res+="흐"+"으".repeat(this.arg1-2)+"읍";
        }
        res+=".".repeat(this.arg2);
        return res
    }
}
