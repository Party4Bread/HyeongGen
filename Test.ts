/// <reference path="OpCode.ts" />

function ConvertAsm(tstts:Array<Hyasm.Command>):string{
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
    while(s%i!=0){
        if(i>s){
            return s;
        }
        i+=1;
    }
    return i;
}

function shortMulAdd(s:number):Array<Hyasm.Command>{
    return [];
}

function tactic(rem:number,numl:Array<number>=[]):Array<number>{
    if(rem==0){
        if(numl.length==0){
            return [1,0]
        }
        else{
            return numl;
        }
    }
    let t = isqrt_rem(rem);
    let tt = BigFac(rem);
    
    let nnl = [...numl];
    let nnnl = [...numl];
    nnl.push(t[0],t[0]);
    nnnl.push(rem/tt,tt);

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

function min(x:any){
    let m = x[0];
    for (const i of x) {
        m=m<i?m:i;
    }
    return m;
}

function GenValMakeAsm(ipt:number,stackaddr:number,forvp:boolean=false):Array<Hyasm.Command>{
    let asmfl = []
    let numset = tactic(ipt)
    for(let j=0;j<numset.length/2;j++){
        asmfl.push(new Hyasm.Mul(numset[j*2],numset[j*2+1]));
    }
    if(numset.length>2||stackaddr<3){
        if(forvp) asmfl.push(new Hyasm.AccAdd(numset.length/2+1,1)); 
        else asmfl.push(new Hyasm.AccAdd(numset.length/2,stackaddr));
    }
    return asmfl;
}

function GenTextAsm(ipt:string,stackaddr:number=3):Array<Hyasm.Command>{
    let asmfl=[];
    let m = min(ipt).charCodeAt(0);
    asmfl.push(...GenValMakeAsm(m,stackaddr))
    asmfl.push(new Hyasm.DupMov(ipt.length,stackaddr))
    for (const i of ipt) {
        asmfl.push(...GenValMakeAsm(i.charCodeAt(0)-m,1,true))
    }
    return asmfl;
}

let asm = GenTextAsm("Hello! World!");
asm.push(new Hyasm.Halt())
console.log(ConvertAsm(asm))