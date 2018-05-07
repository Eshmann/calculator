var calculator = document.calculator;
var Accumulate = 0;
var FlagNewNum = false;
var PendingOp = "";
function NumPressed (Num) {
if (FlagNewNum) {
calculator.ReadOut.value  = Num;
FlagNewNum = false;
   }
else {
if (calculator.ReadOut.value == "0")
calculator.ReadOut.value = Num;
else
calculator.ReadOut.value += Num;
   }
}
function Operation (Op) {
var Readout = calculator.ReadOut.value;
if (FlagNewNum && PendingOp != "=");
else
{
FlagNewNum = true;
if ( '+' == PendingOp )
Accumulate += parseFloat(Readout);
else if ( '-' == PendingOp )
Accumulate -= parseFloat(Readout);
else if ( '/' == PendingOp )
Accumulate /= parseFloat(Readout);
else if ( '*' == PendingOp )
Accumulate *= parseFloat(Readout);
else
Accumulate = parseFloat(Readout);
calculator.ReadOut.value = Accumulate;
PendingOp = Op;
   }
}
function Decimal () {
var curReadOut = calculator.ReadOut.value;
if (FlagNewNum) {
curReadOut = "0.";
FlagNewNum = false;
   }
else
{
if (curReadOut.indexOf(".") == -1)
curReadOut += ".";
   }
calculator.ReadOut.value = curReadOut;
}
function ClearEntry () {
calculator.ReadOut.value = "0";
FlagNewNum = true;
}
function Clear () {
Accumulate = 0;
PendingOp = "";
ClearEntry();
}
function Neg () {
calculator.ReadOut.value = parseFloat(calculator.ReadOut.value) * -1;
}
function Percent () {
calculator.ReadOut.value = (parseFloat(calculator.ReadOut.value) / 100) * parseFloat(Accumulate);
}

