/// <reference path="OpCode.ts" />

let tstts:Command[]=[
    new Mul(11,11),
    new DupMov(5,1),
    new Halt()
]

let res=""
for (const asm of tstts) {
    res+=asm.toHyeong();
}
console.log(res)