"use strict";
class Command {
    constructor(a, b, one, st, mid, ed, c) {
        if (a === 0)
            throw "첫번째 인자 값은 0일수 없습니다.";
        this.arg1 = a;
        this.arg2 = b;
        this.onechar = one;
        this.startchar = st;
        this.middlechar = mid;
        this.endchar = ed;
        if (c !== undefined && c !== null) {
            this.isFlaged = true;
            this.flag = c;
        }
        else {
            this.isFlaged = false;
            this.flag = 0;
        }
    }
    toHyeong() {
        let res = "";
        if (this.arg1 === 0) {
            this.arg1 = this.arg2;
            this.arg2 = 0;
        }
        if (this.arg1 < 2) {
            res += this.onechar;
        }
        else {
            res += this.startchar + this.middlechar.repeat(this.arg1 - 2) + this.endchar;
        }
        res += ".".repeat(this.arg2);
        return res;
    }
}
/// <reference path="../../Command.ts" />
class Mul extends Command {
    /**
     * 현재 스택에 a*b의 값을 넣습니다.
     * @param  {number} a 곱해질a
     * @param  {number} b 곱해질b
     * @param  {number} c? Flag번호
     */
    constructor(a, b, c) {
        super(a, b, "형", "혀", "어", "엉", c);
    }
}
/// <reference path="../../Command.ts" />
class DupMov extends Command {
    /**
     * 현재 스택의 맨 위수를 b스택에 a개 복제해서 넣습니다.
     * @param  {number} a 복제할 수
     * @param  {number} b 저장할 스택 번호
     * @param  {number} c? Flag번호
     */
    constructor(a, b, c) {
        super(a, b, "흑", "흐", "으", "윽", c);
    }
}
/// <reference path="../../Command.ts" />
class InvAccMul extends Command {
    /**
     * 현재 스택의 위쪽 a개의 값을 역수로 바꾸고 그 곱을 b스택에 저장합니다
     * @param  {number} a 부호를 바꿀 값의 수
     * @param  {number} b 저장할 스택 번호
     * @param  {number} c? Flag번호
     */
    constructor(a, b, c) {
        super(a, b, "흡", "흐", "으", "읍", c);
    }
}
/// <reference path="../../Command.ts" />
class AccAdd extends Command {
    /**
     * 현재 스택에서 a개의 수를 pop 하여 합한것을 b스택에 넣습니다
     * @param  {number} a 누산할 값의 수
     * @param  {number} b 저장할 스택 번호
     * @param  {number} c? Flag번호
     */
    constructor(a, b, c) {
        super(a, b, "항", "하", "아", "앙", c);
    }
}
/// <reference path="../../Command.ts" />
class NegAccAdd extends Command {
    /**
     * 현재 스택의 위쪽 a개의 값의 부호를 바꾸고 그 합을 b스택에 저장합니다
     * @param  {number} a 부호를 바꿀 값의 수
     * @param  {number} b 저장할 스택 번호
     * @param  {number} c? Flag번호
     */
    constructor(a, b, c) {
        super(a, b, "흣", "흐", "으", "읏", c);
    }
}
/// <reference path="../../Command.ts" />
class AccMul extends Command {
    /**
     * 현재 스택에서 a개의 수를 pop 하여 곱한것을 b스택에 넣습니다
     * @param  {number} a 누산할 값의 수
     * @param  {number} b 저장할 스택 번호
     * @param  {number} c? Flag번호
     */
    constructor(a, b, c) {
        super(a, b, "핫", "하", "아", "앗", c);
    }
}
/// <reference path="../Command.ts" />
class Halt extends Command {
    constructor() {
        super(1, 1, '', '', '', '');
    }
    toHyeong() {
        return "형흑.흣"; //Mul(1,0),DupMov(1,1),NegAcc(1,0)
    }
}
/// <reference path="./OpCodes/Primitive/Mul.ts" />
/// <reference path="./OpCodes/Primitive/DupMov.ts" />
/// <reference path="./OpCodes/Primitive/InvAccMul.ts" />
/// <reference path="./OpCodes/Primitive/AccAdd.ts" />
/// <reference path="./OpCodes/Primitive/NegAccAdd.ts" />
/// <reference path="./OpCodes/Primitive/AccMul.ts" />
/// <reference path="./OpCodes/Halt.ts" />
/// <reference path="./Command.ts" />
var OpCode;
/// <reference path="./OpCodes/Primitive/Mul.ts" />
/// <reference path="./OpCodes/Primitive/DupMov.ts" />
/// <reference path="./OpCodes/Primitive/InvAccMul.ts" />
/// <reference path="./OpCodes/Primitive/AccAdd.ts" />
/// <reference path="./OpCodes/Primitive/NegAccAdd.ts" />
/// <reference path="./OpCodes/Primitive/AccMul.ts" />
/// <reference path="./OpCodes/Halt.ts" />
/// <reference path="./Command.ts" />
(function (OpCode) {
    OpCode[OpCode["Mul"] = 0] = "Mul";
    OpCode[OpCode["AccMul"] = 1] = "AccMul";
    OpCode[OpCode["AccAdd"] = 2] = "AccAdd";
    OpCode[OpCode["NegAccAdd"] = 3] = "NegAccAdd";
    OpCode[OpCode["InvAccMul"] = 4] = "InvAccMul";
    OpCode[OpCode["DupMov"] = 5] = "DupMov";
})(OpCode || (OpCode = {}));
/// <reference path="OpCode.ts" />
let tstts = [
    new Mul(11, 11),
    new DupMov(5, 1),
    new Halt()
];
let res = "";
for (const asm of tstts) {
    res += asm.toHyeong();
}
console.log(res);
