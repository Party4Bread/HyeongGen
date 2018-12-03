class AccMul extends Command{
    arg1: number;
    arg2: number;
    flag=0;
    isFlaged=false;
    /**
     * 현재 스택에서 a개의 수를 pop 하여 곱한것을 b스택에 넣습니다
     * @param  {number} a 누산할 값의 수
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
            res+="핫";
        }else{
            res+="하"+"아".repeat(this.arg1-2)+"핫";
        }
        res+=".".repeat(this.arg2);
        return res
    }
}
