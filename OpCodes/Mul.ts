class Mul extends Command{
    /**
     * 현재 스택에 a*b의 값을 넣습니다.
     * @param  {number} a 곱해질a
     * @param  {number} b 곱해질b
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
            res+="형";
        }else{
            res+="혀"+"어".repeat(this.arg1-2)+"엉";
        }
        res+=".".repeat(this.arg2);
        return res
    }
}
