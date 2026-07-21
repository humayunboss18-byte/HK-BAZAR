const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", function () {

  const uid = document.getElementById("uid").value.trim();
  const trx = document.getElementById("trx").value.trim();

  if (uid === "" || trx === "") {
    alert("Please enter your UID and Transaction ID.");
    return;
  }

  alert("✅ Order Submitted Successfully!\n\nUID: " + uid + "\nTransaction ID: " + trx);

  document.getElementById("uid").value = "";
  document.getElementById("trx").value = "";
});
