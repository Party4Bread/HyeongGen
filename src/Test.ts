import {Command,AccAdd,AccMul,DupMov,Halt,InvAccMul,Mul,NegAccAdd} from "./OpCode";
import {sum,min,remove} from "lodash";

export class HyeongGen{
    static ConvertAsm(tstts:Array<Command>):string{
        let res="";
        for (const asm of tstts) {
            res+=asm.toHyeong();
        }
        return res;
    }
    
    static BigFac(s:number):number{
        let a = HyeongGen.isqrt_rem(s);
        if(a[1]==0)return a[0];
        let i = a[0];
        while(s%i!=0){
            if(i>s)return s;            
            i+=1;
        }
        return i;
    }
    
    static i3qual_rem(s:number){
        let st=HyeongGen.isqrt_rem(s/3)[0];
        while((st+1)*(st+1)<s/3){
            st+=1
        }
        return [st,s-(3*st*st)]
    }
    
    static tactic2(rem:number,numl:Array<number>=[]):Array<number>{
        if(rem<4){
            if(numl.length==0){
                if(rem==0) return [1,0]
                else return [1,rem]
            }
            else{
                if(rem>0)numl.push(1,rem);
                return numl;
            }
        }
        let t = HyeongGen.i3qual_rem(rem);
        let tt = HyeongGen.BigFac(rem);
        let ttt = HyeongGen.isqrt_rem(rem);
        
        let nnl = [...numl], nnnl = [...numl], nnnnl = [...numl];
    
        if(t[0]!=0)nnl.push(t[0],3*t[0]);
        nnnl.push(rem/tt,tt);
        nnnnl.push(ttt[0],ttt[0]);
    
        let t1=HyeongGen.tactic2(t[1],nnl);
        let t2=HyeongGen.tactic2(0,nnnl);
        let t3=HyeongGen.tactic2(ttt[1],nnnnl);
        let mint=t1;
        const evensum=(arr: Array<any>)=>sum(arr.filter((e, i) => i%2==0))
        const oddsum=(arr: Array<any>)=>sum(arr.filter((e, i) => i%2==1))
        if(evensum(mint)+(oddsum(mint)/3)+t1.length>evensum(t2)+(oddsum(t2)/3)+t2.length) mint=t2;
        if(evensum(mint)+(oddsum(mint)/3)+t1.length>evensum(t3)+(oddsum(t3)/3)+t3.length) mint=t3;
        return mint;
    }
    
    static tactic(rem:number,numl:Array<number>=[]):Array<number>{
        if(rem==0){
            if(numl.length==0){
                return [1,0]
            }
            else{
                return numl;
            }
        }
        const t = HyeongGen.isqrt_rem(rem);
        const tt = HyeongGen.BigFac(rem);
        
        const nnl = [...numl];
        const nnnl = [...numl];
        nnl.push(t[0],t[0]);
        nnnl.push(rem/tt,tt);
    
        const t1=HyeongGen.tactic(t[1],nnl);
        const t2=HyeongGen.tactic(0,nnnl);
        return sum(t1)+t1.length<sum(t2)+t2.length?t1:t2
    }

    static isqrt_rem(s:number):Array<number>{
        const t=Math.floor(Math.sqrt(s))
        const r=s-(t*t)
        return [t,r];
    }

    static GenValMakeAsm(ipt:number,stackaddr:number,forvp:boolean=false):Array<Command>{
        const asmfl = []
        const numset = HyeongGen.tactic2(ipt)
        //console.log(numset)
        for(let j=0;j<numset.length/2;j++){
            asmfl.push(new Mul(numset[j*2],numset[j*2+1]));
        }
        if(numset.length>2||stackaddr<3){
            if(forvp) asmfl.push(new AccAdd(numset.length/2+1,1)); 
            else asmfl.push(new AccAdd(numset.length/2,stackaddr));
        }
        return asmfl;
    }
    
    static GenTextAsm(ipt:string,stackaddr:number=3):Array<Command>{
        const asmfl=[];
        const m = min(ipt)!.charCodeAt(0);
        asmfl.push(...HyeongGen.GenValMakeAsm(m,stackaddr))
        asmfl.push(new DupMov(ipt.length,stackaddr))
        for (const i of ipt) {
            asmfl.push(...HyeongGen.GenValMakeAsm(i.charCodeAt(0)-m,1,true))
        }
        return asmfl;
    }
    
    static hyeongshort(s:string):string{
        return s.replace(/[.]{3}/g, "…");
    }
}

let tstts:Command[]=[
    new Mul(11,11),
    new DupMov(5,1),
    new Mul(41,14),
    new InvAccMul(1,3),
    new Halt()
];
console.log(HyeongGen.ConvertAsm(tstts))
console.log(HyeongGen.tactic("하".charCodeAt(0)))
console.log(HyeongGen.tactic2("하".charCodeAt(0)))
const asm = HyeongGen.GenTextAsm("Hello! World!");
asm.push(new Halt())
console.log(HyeongGen.hyeongshort(HyeongGen.ConvertAsm(asm)).length)
console.log(HyeongGen.hyeongshort(HyeongGen.ConvertAsm(asm)).length)
