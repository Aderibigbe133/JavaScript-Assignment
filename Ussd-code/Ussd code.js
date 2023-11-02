
 
let ussd;

 ussd = "*901#"
ussd = prompt("Enter your USSD CODE")

switch(ussd == "*901#"){
    case true:
     let options = prompt(`1. Make transfer
2. Buy recharge card
3. Check Balance`);


switch(options){
  // for option 1
  case "1" :
    console.log("selected one");
    let acctNumber = prompt("Enter Your Account Number");
    let reciever = prompt("Enter recievers Account number");
    let amount = prompt("Enter the Amount");
    let pin = prompt("Please Enter your pin");
    alert(`You have successfully Transferred $${amount} to ${reciever} 
                             Thank You`);
    break;

  //for Option2
    case "2":
      console .log("selected 2");   
     let acctNo = prompt("Enter Your Account Number"); 
     let service = prompt(`Please enter your service provider
1. MTN
2. GLO
3. Airtel
4. 9mobile
5. Etisalat`
);
     let amountEntered = prompt("Enter the Amount");
     alert(`You have successful suscribed your Airtime Balance with ${amountEntered}Naira` );
    break;
     
  // For Option 3
    case "3":
      console.log("selected 3");
     let account = prompt("Enter Your Account Number")     
      alert("Your Bank Balance Is ***********")
}
break
default:
  alert("Invalid Code Please Try *901#")


}
 


