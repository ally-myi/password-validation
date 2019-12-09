<script type="text/javascript">

  function checkPassword(str) //this is the function that will be called later on to check the submitted password
  {
  //we need to create a variable that holds the checks for the code
  // this is is like a look-ahead which basically compares the returned with the future part of the string
    var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{10,}$/; 
  // the /d is short for [0-9] taht helps identofy if there is at least one number.
  //the [a-z] checks for at least one lowercase letter
  // the [A-Z] checks for at least one uppercase letter
  // the .{10,}$/ checks for there to be 10 or more characters input
    return re.test(str);
  }

  function checkForm(form) // this is the function that will check the form and where the above function will be called
  {
    //the entire if statement is comparing the input from the form to the function af it is not true to the reuqirements in the function, then the message will be displayed
      if(!checkPassword(form.pwd1.value)) { 
        alert("The password you have entered is not valid!");
        form.pwd1.focus();
        return false;
      }
     else {
      alert("The password you entered meets the requirements");
      form.pwd1.focus();
      return true;
    }
    return true;
  }

</script>
