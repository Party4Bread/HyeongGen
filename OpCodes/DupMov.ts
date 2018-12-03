class DupMov extends Command{
    arg1: number;
    arg2: number;
    flag=0;
    isFlaged=false;
    /**
     * 현재 스택의 맨 위수를 b스택에 a개 복제해서 넣습니다.
     * @param  {number} a 복제할 수
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
            res+="흑";
        }else{
            res+="흐"+"으".repeat(this.arg1-2)+"윽";
        }
        res+=".".repeat(this.arg2);
        return res
    }
}
