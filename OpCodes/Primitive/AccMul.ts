/// <reference path="../../Command.ts" />
class AccMul extends Command{
    /**
     * 현재 스택에서 a개의 수를 pop 하여 곱한것을 b스택에 넣습니다
     * @param  {number} a 누산할 값의 수
     * @param  {number} b 저장할 스택 번호
     * @param  {number} c? Flag번호
     */
    constructor(a:number,b:number,c?:number){
        super(a,b,"핫","하","아","앗",c);
    }
}
