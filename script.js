document.addEventListener("DOMContentLoaded", function () {

    const submitBtn = document.getElementById("submitBtn");

    submitBtn.addEventListener("click", function () {

        const uid = document.getElementById("uid").value.trim();
        const trx = document.getElementById("trx").value.trim();

        if (uid === "" || trx === "") {
            alert("Please fill all fields!");
            return;
        }

        alert(
            "✅ Order Submitted Successfully!\n\n" +
            "UID: " + uid + "\n" +
            "Transaction ID: " + trx
        );

        document.getElementById("uid").value = "";
        document.getElementById("trx").value = "";
    });

});
