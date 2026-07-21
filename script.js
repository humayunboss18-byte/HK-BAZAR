document.getElementById("submitBtn").addEventListener("click", function () {

    const uid = document.getElementById("uid").value.trim();
    const trx = document.getElementById("trx").value.trim();

    if (uid === "" || trx === "") {
        alert("Please fill all fields!");
        return;
    }

    alert("✅ Order Submitted Successfully!\n\nUID: " + uid + "\nTransaction ID: " + trx);

});
