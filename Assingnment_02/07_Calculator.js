const calculator = {
    add:function (a,b){
        return a+b;
    },
    Subtract:function (a,b){
        return a-b;
    },
    multiply:function (a,b){
        return a*b;
    },
    calculate:function (operation,a,b){
        if(operation === 'add'){
            return this.add(a,b);
        }
        else if(operation ==="Subtract"){
            return this.Subtract(a,b);
        }
        else if(operation === "multiply"){
            return this.multiply(a,b);
        }
    },
};

const additionResult = calculator.calculate.call(calculator,'add',5,3);
console.log(`Addition Result : ${additionResult}`);


const discountColculator = {
    discountPercentage: 10,
    applyDiscount: function(amount){
        return amount - (amount*this.discountPercentage)/100;
    },
};

const calculateDiscount =
    discountColculator.applyDiscount.bind(discountColculator);
    const discountedAmount = calculateDiscount(100);
    console.log(`Discounted Amount : ${discountedAmount}`);


