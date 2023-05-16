function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
  function openForm1() {
    document.getElementById("myForm1").style.display = "block";
  }
  
  function closeForm1() {
    document.getElementById("myForm1").style.display = "none";
  }
  
  function openForm2() {
    document.getElementById("myForm2").style.display = "block";
  }
  
  function closeForm2() {
    document.getElementById("myForm2").style.display = "none";
  }
  function openForm4() {
    document.getElementById("myForm4").style.display = "block";
  }
  
  function closeForm4() {
    document.getElementById("myForm4").style.display = "none";
  }

  function passvalidation(){
    var password=document.getElementById("1stPassword").value;
    var ConfirmPassword=document.getElementById("ConfirmPassword").value;

    if(password==ConfirmPassword){
      return true;
    }
    else{
      alert("Password not same");
      return false;
    }
  } 