const calculator = {
  add:function(a,b){
    return a+b;
  },
  minus:function(a,b){
    return a-b;
  },
  divide:function(a,b){
    return a/b;
  },
  multiply:function(a,b){
    return a*b;
  },
  powerOf:function(a,b){
    return a**b;
  }
}
const plusResult = calculator.add(1,2);
const minusResult = calculator.minus(plusResult ,2);
const divideResult = calculator.divide(45,minusResult);
const multiplyResult = calculator.multiply(divideResult,plusResult);
const powerOfResult = calculator.powerOf(divideResult,minusResult);

// console.log(plusResult)