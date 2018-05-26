function validateForm(){
  var a = document.forms["orderForm"]["firstName"].value
  var b = document.forms["orderForm"]["lastName"].value
  var c = document.forms["orderForm"]["address"].value
  var d = document.forms["orderForm"]["city"].value
  var e = document.forms["orderForm"]["province"].value
  var f = document.forms["orderForm"]["postalCode"].value
  var widg1 = document.forms["orderForm"]["widget1qty"].value
  var widg2 = document.forms["orderForm"]["widget2qty"].value
  var widg3 = document.forms["orderForm"]["widget3qty"].value

  if(a == "" || a== null){
    alert("Please enter the first name")

    return false;

}
  if(b == "" || b == null){
  alert("Please enter the last name")

  return false;
  }

  if(c == "" || c == null){
    alert("Please enter the address")

    return false;

  }
  if(d == "" || d == null ){
    alert("Please enter the city")

    return false;
  }

  if(e == null){
    alert("Please select a valid province listed")

    return false;
  }

  if(f == null || f == ""){
    alert("Please enter a postal code.")

    return false;
  }
  if (f < 6){
    alert("Postal code must be 6 digits long.")

    return false;
  }
  if(widg1 < 0 || widg1 < 0 || widg3 < 0){
    alert("must have zero or a positive number of widgets ordered. Please enter value of 0 or above.")
    return false;
  }
  if(widg1 == 0 && widg2 == 0 && widg3 == 0){
    alert("At least one item must be ordered.")
    return false;
  }
  else{
    return orderTotal();
  }

}

function orderTotal(){

  var widg1 = document.forms["orderForm"]["widget1qty"].value
  var widg2 = document.forms["orderForm"]["widget2qty"].value
  var widg3 = document.forms["orderForm"]["widget3qty"].value

  if(document.getElementById("shippingTypeStandard").checked){
  var orderTot = (widg1 * 5) + (widg2 * 15) + (widg3 * 25) + 5
  alert("Form validated correctly.\norder total is $" + orderTot)
  return true;
  }
  else if(document.getElementById("shippingTypeExpress").checked){
  var orderTot = (widg1 * 5) + (widg2 * 15) + (widg3 * 25)  + 10
  alert("Form validated correctly.\norder total is $" + orderTot)
  return true;
  }
  else if(document.getElementById("shippingTypeOvernight").checked){
  orderTot = (widg1 * 5) + (widg2 * 15) + (widg3 * 25)  + 20
  alert("Form validated correctly.\norder total is $" + orderTot)
  return true;
  }
}
