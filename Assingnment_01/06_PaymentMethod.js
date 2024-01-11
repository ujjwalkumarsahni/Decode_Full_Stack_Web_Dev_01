let payment = "Paypal";
switch(payment){
    case "credit":{
        console.log("credit payment processing fee: 2%");
        break;
    }
    case "Debit":{
        console.log("Debit payment processing fee: 1.5%");
        break;
    }
    case "Paypal":{
        console.log("Paypal payment processing fee: 3%");
        break;
    }
    default:{
        console.log("Invalid payment");
        break;
    }
}