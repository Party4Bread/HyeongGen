"use strict";
var Hyasm;
(function(Hyasm) {
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
            } else {
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
            } else {
                res += this.startchar + this.middlechar.repeat(this.arg1 - 2) + this.endchar;
            }
            res += ".".repeat(this.arg2);
            return res;
        }
    }
    Hyasm.Command = Command;
})(Hyasm || (Hyasm = {}));
/// <reference path="../../Command.ts" />
var Hyasm;
(function(Hyasm) {
    class Mul extends Hyasm.Command {
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
    Hyasm.Mul = Mul;
})(Hyasm || (Hyasm = {}));
/// <reference path="../../Command.ts" />
var Hyasm;
(function(Hyasm) {
    class DupMov extends Hyasm.Command {
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
    Hyasm.DupMov = DupMov;
})(Hyasm || (Hyasm = {}));
/// <reference path="../../Command.ts" />
var Hyasm;
(function(Hyasm) {
    class InvAccMul extends Hyasm.Command {
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
    Hyasm.InvAccMul = InvAccMul;
})(Hyasm || (Hyasm = {}));
/// <reference path="../../Command.ts" />
var Hyasm;
(function(Hyasm) {
    class AccAdd extends Hyasm.Command {
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
    Hyasm.AccAdd = AccAdd;
})(Hyasm || (Hyasm = {}));
/// <reference path="../../Command.ts" />
var Hyasm;
(function(Hyasm) {
    class NegAccAdd extends Hyasm.Command {
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
    Hyasm.NegAccAdd = NegAccAdd;
})(Hyasm || (Hyasm = {}));
/// <reference path="../../Command.ts" />
var Hyasm;
(function(Hyasm) {
    class AccMul extends Hyasm.Command {
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
    Hyasm.AccMul = AccMul;
})(Hyasm || (Hyasm = {}));
/// <reference path="../Command.ts" />
var Hyasm;
(function(Hyasm) {
    class Halt extends Hyasm.Command {
        constructor() {
            super(1, 1, '', '', '', '');
        }
        toHyeong() {
            return "형흑.흣"; //Mul(1,0),DupMov(1,1),NegAcc(1,0)
        }
    }
    Hyasm.Halt = Halt;
})(Hyasm || (Hyasm = {}));
/// <reference path="./OpCodes/Primitive/Mul.ts" />
/// <reference path="./OpCodes/Primitive/DupMov.ts" />
/// <reference path="./OpCodes/Primitive/InvAccMul.ts" />
/// <reference path="./OpCodes/Primitive/AccAdd.ts" />
/// <reference path="./OpCodes/Primitive/NegAccAdd.ts" />
/// <reference path="./OpCodes/Primitive/AccMul.ts" />
/// <reference path="./OpCodes/Halt.ts" />
/// <reference path="./Command.ts" />
/*
enum OpCode{
    Mul,
    AccMul,
    AccAdd,
    NegAccAdd,
    InvAccMul,
    DupMov
}
*/
/// <reference path="OpCode.ts" />
var Dec06Ver = {
    ConvertAsm(tstts) {
        let res = "";
        for (const asm of tstts) {
            res += asm.toHyeong();
        }
        return res;
    },
    BigFac(s) {
        let a = isqrt_rem(s);
        if (a[1] == 0)
            return a[0];
        let i = a[0];
        while (s % i != 0) {
            if (i > s) {
                return s;
            }
            i += 1;
        }
        return i;
    },
    shortMulAdd(s) {
        return [];
    },
    tactic(rem, numl = []) {
        if (rem == 0) {
            if (numl.length == 0) {
                return [1, 0];
            } else {
                return numl;
            }
        }
        let t = isqrt_rem(rem);
        let tt = BigFac(rem);
        let nnl = [...numl];
        let nnnl = [...numl];
        nnl.push(t[0], t[0]);
        nnnl.push(rem / tt, tt);
        let t1 = tactic(t[1], nnl);
        let t2 = tactic(0, nnnl);
        return sum(t1) + t1.length < sum(t2) + t2.length ? t1 : t2;
    },
    sum(l) {
        let a = 0;
        for (const i of l) {
            a += i;
        }
        return a;
    },
    isqrt_rem(s) {
        let t = Math.floor(Math.sqrt(s));
        let r = s - (t * t);
        return [t, r];
    },
    min(x) {
        let m = x[0];
        for (const i of x) {
            m = m < i ? m : i;
        }
        return m;
    },
    GenValMakeAsm(ipt, stackaddr, forvp = false) {
        let asmfl = [];
        let numset = tactic(ipt);
        for (let j = 0; j < numset.length / 2; j++) {
            asmfl.push(new Hyasm.Mul(numset[j * 2], numset[j * 2 + 1]));
        }
        if (numset.length > 2 || stackaddr < 3) {
            if (forvp)
                asmfl.push(new Hyasm.AccAdd(numset.length / 2 + 1, 1));
            else
                asmfl.push(new Hyasm.AccAdd(numset.length / 2, stackaddr));
        }
        return asmfl;
    },
    GenTextAsm(ipt, stackaddr = 3) {
        let asmfl = [];
        let m = min(ipt).charCodeAt(0);
        asmfl.push(...GenValMakeAsm(m, stackaddr));
        asmfl.push(new Hyasm.DupMov(ipt.length, stackaddr));
        for (const i of ipt) {
            asmfl.push(...GenValMakeAsm(i.charCodeAt(0) - m, 1, true));
        }
        return asmfl;
    }
}