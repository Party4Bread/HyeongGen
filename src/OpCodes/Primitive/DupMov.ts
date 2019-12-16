import { Command } from "../../Command";

export class DupMov extends Command{
    /**
     * 현재 스택의 맨 위수를 b스택에 a개 복제해서 넣습니다.
     * @param  {number} a 복제할 수
     * @param  {number} b 저장할 스택 번호
     * @param  {number} c? Flag번호
     */
    constructor(a:number,b:number,c?:number){
        super(a,b,"흑","흐","으","윽",c);
    }
}
