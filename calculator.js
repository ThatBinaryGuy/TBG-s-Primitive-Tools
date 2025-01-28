const zero = document.getElementById("0");
const i = document.getElementById("1");
const ii = document.getElementById("2");
const iii = document.getElementById("3");
const iv = document.getElementById("4");
const v = document.getElementById("5");
const vi = document.getElementById("6");
const vii = document.getElementById("7");
const viii = document.getElementById("8");
const ix = document.getElementById("9");
const add = document.getElementById("+");
const sub = document.getElementById("-");
const mul = document.getElementById("*");
const div = document.getElementById("/");
const equ = document.getElementById("=");
const dot = document.getElementById(".");
const ac = document.getElementById("AC");
const del = document.getElementById("DEL");
const anse = document.getElementById("ANS");
const pie = document.getElementById("PI");
const lb = document.getElementById("(");
const rb = document.getElementById(")");
const eqe = document.getElementById("eq");
const ree = document.getElementById("re");

let pi = 3.1415926535;
let eq = "";
eq = String(eq);
let eqf = "n";
const last = eq.at(-1);
let ans = "";

function press(n){
    if (n == "AC"){
        eq = "";
        ree.textContent = "";
    }
    if (n == "0"){
        eq += "0";
    }
    if (n == "1"){
        eq += "1";
    }
    if (n == "2"){
        eq += "2";
    }
    if (n == "3"){
        eq += "3";
    }
    if (n == "4"){
        eq += "4";
    }
    if (n == "5"){
        eq += "5";
    }
    if (n == "6"){
        eq += "6";
    }
    if (n == "7"){
        eq += "7";
    }
    if (n == "8"){
        eq += "8";
    }
    if (n == "9"){
        eq += "9";
    }
    if (n == "/"){
        eq += "/";
    }
    if (n == "*"){
        eq += "*";
    }
    if (n == "-"){
        eq += "-";
    }
    if (n == "+"){
        eq += "+";
    }
    if (n == "."){
        eq += ".";
    }
    if (n == "DEL"){
        eq = eq.substring(0, eq.length - 1);
    }
    if (n == "ANS"){
        eq += ans;
    }
    if (n == "("){
        eq += "(";
    }
    if (n == ")"){
        eq += ")";
    }
    if (n == "PI"){
        eq += pi;
    }
    eqe.textContent = eq;
    if (n == "="){
        ree.textContent = eval(eq);
        ans = ree.textContent;
    }
}

// Numbers
i.onclick = function(){press("1")}
ii.onclick = function(){press("2")}
iii.onclick = function(){press("3")}
iv.onclick = function(){press("4")}
v.onclick = function(){press("5")}
vi.onclick = function(){press("6")}
vii.onclick = function(){press("7")}
viii.onclick = function(){press("8")}
ix.onclick = function(){press("9")}
zero.onclick = function(){press("0")}

// Functions
ac.onclick = function(){press("AC")}
div.onclick = function(){press("/")}
mul.onclick = function(){press("*")}
sub.onclick = function(){press("-")}
add.onclick = function(){press("+")}
equ.onclick = function(){press("=")}
dot.onclick = function(){press(".")}
del.onclick = function(){press("DEL")}
anse.onclick = function(){press("ANS")}
lb.onclick = function(){press("(")}
rb.onclick = function(){press(")")}
pie.onclick = function(){press("PI")}