//Problem 4: Given stored username and password and input username and password, Print if the user can login or not.
let stored_username="saksha123@gmail.com"
let stored_password="7689"
let input_username="saksha123@gmail.com"
let input_password="7689"
if(stored_username==input_username&&input_password==stored_password){
  console.log("login")
}else{
  console.log("can't login");
}