<script type="text/javascript">

  function checkPassword(str)
  {
    var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{10,}$/;
    return re.test(str);
  }

  function checkForm(form)
  {
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
