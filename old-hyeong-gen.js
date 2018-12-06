function idiotmethod() {
    let td = document.getElementById("ipt").value;
    let dest = "";
    for (let i = 0; i < td.length; i++) {
        dest += "형";
        for (let j = 0; j < td.charCodeAt(i); j++) {
            dest += ".";
        }
        dest += "항."
    }
    dest += "형흑.흣"
    document.getElementById("opt").value = dest;
}

function beinglittlehumanmethod() {
    let td = document.getElementById("ipt").value;
    let dest = "";
    let base = td.charCodeAt(0);
    if (td.length <= 1) {
        idiotmethod();
        return;
    }
    for (let i = 0; i < td.length; i++) {
        base = td.charCodeAt(i) < base ? td.charCodeAt(i) : base;
    }
    dest += "형";
    for (let j = 0; j < base; j++) {
        dest += ".";
    }

    if (td.length <= 2) {
        dest += "흑...";
    } else {
        dest += "흐";
        for (let i = 3; i < td.length; i++) {
            dest += "으";
        }
        dest += "윽...";
    }

    for (let i = 0; i < td.length; i++) {
        dest += "형";
        for (let j = base; j < td.charCodeAt(i); j++) {
            dest += ".";
        }
        dest += "하앙."
    }
    dest += "형흑.흣"
    document.getElementById("opt").value = dest;
}

function littlehumanmethod() {
    let td = document.getElementById("ipt").value;
    let dest = "";
    let base = td.charCodeAt(0);
    if (td.length <= 1) {
        idiotmethod();
        return;
    }
    for (let i = 0; i < td.length; i++) {
        base = td.charCodeAt(i) < base ? td.charCodeAt(i) : base;
    }
    dest += hyungfactor(base);

    if (td.length <= 2) {
        dest += "흑...";
    } else {
        dest += "흐";
        for (let i = 3; i < td.length; i++) {
            dest += "으";
        }
        dest += "윽...";
    }

    for (let i = 0; i < td.length; i++) {
        dest += hyungfactor(td.charCodeAt(i) - base);

        dest += "하앙.";
    }
    dest += "형흑.흣"
    document.getElementById("opt").value = dest;
}

function hyungfactor(num) {
    let subnum = 0;
    let maxghi = 0;
    let dest = "";
    var sqrtnum = Math.floor(Math.sqrt(num));
    if (num == 0) {
        return "형";
    }
    if (num == 1) {
        return "형.";
    }
    if (isPrime(num)) {
        num -= 1;
        subnum = 1;
    }
    for (var i = sqrtnum + 1; i > 0; i--) { // sqrtnum+1
        if (num % i == 0) {
            maxghi = i;
            break;
        }
    }
    dest += "혀";
    for (let i = 2; i < maxghi; i++) {
        dest += "어";
    }
    dest += "엉";
    for (let i = 0; i < num / maxghi; i++) {
        dest += ".";
    }
    if (subnum == 1) {
        dest += "형.하앙...";
    }
    return dest;
}

function isPrime(num) {
    var sqrtnum = Math.floor(Math.sqrt(num));
    var prime = num != 1;
    for (var i = 2; i < sqrtnum + 1; i++) { // sqrtnum+1
        if (num % i == 0) {
            prime = false;
            break;
        }
    }
    return prime;
}