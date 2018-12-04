/// <reference path="../../Command.ts" />
class Mul extends Command{
    /**
     * 현재 스택에 a*b의 값을 넣습니다.
     * @param  {number} a 곱해질a
     * @param  {number} b 곱해질b
     * @param  {number} c? Flag번호
     */
    constructor(a:number,b:number,c?:number){
        super(a,b,"형","혀","어","엉",c);
    }
}
