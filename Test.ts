/// <reference path="OpCode.ts" />

function ConvertAsm(tstts:Array<Command>):string{
    let res="";
    for (const asm of tstts) {
        res+=asm.toHyeong();
    }
    return res;
}

function BigFac(s:number):number{
    let a = isqrt_rem(s);
    if(a[1]==0)return a[0];
    let i = a[0];
    if(i%2==0)i+=1;
    while(s%i!=0){
        if(i>s){
            return s;
        }
        i+=2;
    }
    return i;
}

function shortMulAdd(s:number):Array<Command>{
    return [];
}

function tactic(rem:number,numl:Array<number>=[]):Array<number>{
    if(rem==0)return numl;
    let t = isqrt_rem(rem);
    let tt = BigFac(rem);
    
    let nnl = [...numl];
    let nnnl = [...numl];
    nnl.push(t[0],t[0]);
    nnnl.push(tt,rem/tt);

    let t1=tactic(t[1],nnl);
    let t2=tactic(0,nnnl);
    return sum(t1)+t1.length<sum(t2)+t2.length?t1:t2
}
function sum(l:Array<number>):number{
    let a=0;
    for (const i of l) {
        a+=i;
    }
    return a;
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
    new Mul(41,14),
    new InvAccMul(1,3),
    new Halt()
];
console.log(ConvertAsm(tstts))
console.log(tactic("하".charCodeAt(0)))