"use strict";
var OpCode;
(function(OpCode) {
    OpCode[OpCode["Mul"] = 0] = "Mul";
    OpCode[OpCode["AccMul"] = 1] = "AccMul";
    OpCode[OpCode["AccAdd"] = 2] = "AccAdd";
    OpCode[OpCode["NegAccAdd"] = 3] = "NegAccAdd";
    OpCode[OpCode["InvAccMul"] = 4] = "InvAccMul";
    OpCode[OpCode["DupMov"] = 5] = "DupMov";
})(OpCode || (OpCode = {}));
class AccAdd {
    /**
     * 현재 스택에서 a개의 수를 pop 하여 합한것을 b스택에 넣습니다
     * @param  {number} a 누산할 값의 수
     * @param  {number} b 저장할 스택 번호
     * @param  {number} c? Flag번호
     */
    constructor(a, b, c) {
        this.flag = 0;
        this.isFlaged = false;
        this.arg1 = a;
        this.arg2 = b;
        if (c !== undefined && c !== null) {
            this.isFlaged = true;
            this.flag = c;
        }
    }
    toHyeong() {
        let res = "";
        if (this.arg1 === 0) {
            this.arg1 = this.arg2;
            this.arg2 = 0;
        }
        if (this.arg1 < 2) {
            res += "항";
        } else {
            res += "하" + "아".repeat(this.arg1 - 2) + "앙";
        }
        res += ".".repeat(this.arg2);
        return res;
    }
}
class AccMul {
    /**
     * 현재 스택에서 a개의 수를 pop 하여 곱한것을 b스택에 넣습니다
     * @param  {number} a 누산할 값의 수
     * @param  {number} b 저장할 스택 번호
     * @param  {number} c? Flag번호
     */
    constructor(a, b, c) {
        this.flag = 0;
        this.isFlaged = false;
        this.arg1 = a;
        this.arg2 = b;
        if (c !== undefined && c !== null) {
            this.isFlaged = true;
            this.flag = c;
        }
    }
    toHyeong() {
        let res = "";
        if (this.arg1 === 0) {
            this.arg1 = this.arg2;
            this.arg2 = 0;
        }
        if (this.arg1 < 2) {
            res += "핫";
        } else {
            res += "하" + "아".repeat(this.arg1 - 2) + "핫";
        }
        res += ".".repeat(this.arg2);
        return res;
    }
}
class DupMov {
    /**
     * 현재 스택의 맨 위수를 b스택에 a개 복제해서 넣습니다.
     * @param  {number} a 복제할 수
     * @param  {number} b 저장할 스택 번호
     * @param  {number} c? Flag번호
     */
    constructor(a, b, c) {
        this.flag = 0;
        this.isFlaged = false;
        this.arg1 = a;
        this.arg2 = b;
        if (c !== undefined && c !== null) {
            this.isFlaged = true;
            this.flag = c;
        }
    }
    toHyeong() {
        let res = "";
        if (this.arg1 === 0) {
            this.arg1 = this.arg2;
            this.arg2 = 0;
        }
        if (this.arg1 < 2) {
            res += "흑";
        } else {
            res += "흐" + "으".repeat(this.arg1 - 2) + "윽";
        }
        res += ".".repeat(this.arg2);
        return res;
    }
}
class InvAccMul {
    /**
     * 현재 스택의 위쪽 a개의 값을 역수로 바꾸고 그 곱을 b스택에 저장합니다
     * @param  {number} a 부호를 바꿀 값의 수
     * @param  {number} b 저장할 스택 번호
     * @param  {number} c? Flag번호
     */
    constructor(a, b, c) {
        this.flag = 0;
        this.isFlaged = false;
        this.arg1 = a;
        this.arg2 = b;
        if (c !== undefined && c !== null) {
            this.isFlaged = true;
            this.flag = c;
        }
    }
    toHyeong() {
        let res = "";
        if (this.arg1 === 0) {
            this.arg1 = this.arg2;
            this.arg2 = 0;
        }
        if (this.arg1 < 2) {
            res += "흡";
        } else {
            res += "흐" + "으".repeat(this.arg1 - 2) + "읍";
        }
        res += ".".repeat(this.arg2);
        return res;
    }
}
class Mul {
    /**
     * 현재 스택에 a*b의 값을 넣습니다.
     * @param  {number} a 곱해질a
     * @param  {number} b 곱해질b
     * @param  {number} c? Flag번호
     */
    constructor(a, b, c) {
        this.flag = 0;
        this.isFlaged = false;
        this.arg1 = a;
        this.arg2 = b;
        if (c !== undefined && c !== null) {
            this.isFlaged = true;
            this.flag = c;
        }
    }
    toHyeong() {
        let res = "";
        if (this.arg1 === 0) {
            this.arg1 = this.arg2;
            this.arg2 = 0;
        }
        if (this.arg1 < 2) {
            res += "형";
        } else {
            res += "혀" + "어".repeat(this.arg1 - 2) + "엉";
        }
        res += ".".repeat(this.arg2);
        return res;
    }
}
class NegAccAdd {
    /**
     * 현재 스택의 위쪽 a개의 값의 부호를 바꾸고 그 합을 b스택에 저장합니다
     * @param  {number} a 부호를 바꿀 값의 수
     * @param  {number} b 저장할 스택 번호
     * @param  {number} c? Flag번호
     */
    constructor(a, b, c) {
        this.flag = 0;
        this.isFlaged = false;
        this.arg1 = a;
        this.arg2 = b;
        if (c !== undefined && c !== null) {
            this.isFlaged = true;
            this.flag = c;
        }
    }
    toHyeong() {
        let res = "";
        if (this.arg1 === 0) {
            this.arg1 = this.arg2;
            this.arg2 = 0;
        }
        if (this.arg1 < 2) {
            res += "흣";
        } else {
            res += "흐" + "으".repeat(this.arg1 - 2) + "읏";
        }
        res += ".".repeat(this.arg2);
        return res;
    }
}