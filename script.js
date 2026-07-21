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
<div class="card">
    <h3>25 Diamond</h3>
    <p>৳25</p>
    <button onclick="document.querySelector('.order').scrollIntoView({behavior:'smooth'})">
        Buy Now
    </button>
</div>

<div class="card">
    <h3>115 Diamond</h3>
    <p>৳95</p>
    <button onclick="document.querySelector('.order').scrollIntoView({behavior:'smooth'})">
        Buy Now
    </button>
</div>

<div class="card">
    <h3>240 Diamond</h3>
    <p>৳190</p>
    <button onclick="document.querySelector('.order').scrollIntoView({behavior:'smooth'})">
        Buy Now
    </button>
</div>
