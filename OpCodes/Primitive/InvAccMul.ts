/// <reference path="../../Command.ts" />
class InvAccMul extends Command{
    /**
     * 현재 스택의 위쪽 a개의 값을 역수로 바꾸고 그 곱을 b스택에 저장합니다
     * @param  {number} a 부호를 바꿀 값의 수
     * @param  {number} b 저장할 스택 번호
     * @param  {number} c? Flag번호
     */
    constructor(a:number,b:number,c?:number){
        super(a,b,"흡","흐","으","읍",c);
    }
}
