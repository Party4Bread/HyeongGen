/// <reference path="OpCode.ts" />

function ConvertAsm(tstts:Array<Command>):string{
    let res="";
    for (const asm of tstts) {
        res+=asm.toHyeong();
    }
    return res;
}

function shortMulAdd(s:number):Array<Command>{
    return [];
}

function tactic(rem:number,t:Array<Command>,dep:number):Array<Command>{
    if(rem==0)return t;
    let tc=t;
    //
    //t
    //let tt=tactic()
    return [];

}

function isqrt_rem(s:number):Array<number>{
    let t=Math.floor(Math.sqrt(s))
    let r=s-(t*t)
    return [t,r];
}

function GenTextAsm(ipt:string):Array<Command>{
    let asmfl="";

    return [];
}

let tstts:Command[]=[
    new Mul(11,11),
    new DupMov(5,1),
    new Halt()
];
