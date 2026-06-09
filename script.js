// ==========================
// MOBILE MENU
// ==========================

const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    siteNav.classList.toggle("is-open");
  });
}


// ==========================
// CHANGE QUANTITY BUTTON
// ==========================

function changeQty(id, value){

  const input =
    document.getElementById(id);

  if(!input) return;

  let qty =
    parseInt(input.value) || 0;

  qty += value;

  if(qty < 0){
    qty = 0;
  }

  input.value = qty;

  hitungTotal();

}

// ==========================
// PRICE CONFIG
// ==========================

const harga = {
  chocochip: 40000,
  keju: 45000,
  chocokeju: 50000,
  almondkeju: 50000,
  almondchoco: 50000,
  brownies22: 60000,
  browniescup: 10000
};


// ==========================
// TOTAL CALCULATION
// ==========================

function hitungTotal() {

  const chocochip =
    parseInt(document.getElementById("qty-chocochip")?.value) || 0;

  const keju =
    parseInt(document.getElementById("qty-keju")?.value) || 0;

  const chocokeju =
    parseInt(document.getElementById("qty-chocokeju")?.value) || 0;

  const almondkeju =
    parseInt(document.getElementById("qty-almondkeju")?.value) || 0;

  const almondchoco =
    parseInt(document.getElementById("qty-almondchoco")?.value) || 0;

  const brownies22 =
    parseInt(document.getElementById("qty-brownies22")?.value) || 0;

  const browniescup =
    parseInt(document.getElementById("qty-browniescup")?.value) || 0;

  const total =
    (chocochip * harga.chocochip) +
    (keju * harga.keju) +
    (chocokeju * harga.chocokeju) +
    (almondkeju * harga.almondkeju) +
    (almondchoco * harga.almondchoco) +
    (brownies22 * harga.brownies22) +
    (browniescup * harga.browniescup);

  const totalElement =
    document.getElementById("totalHarga");

  if (totalElement) {
    totalElement.innerHTML =
      "Rp " + total.toLocaleString("id-ID");
  }

  return total;
}


// ==========================
// AUTO UPDATE TOTAL
// ==========================

const qtyInputs =
document.querySelectorAll(
"#qty-chocochip,#qty-keju,#qty-chocokeju,#qty-almondkeju,#qty-almondchoco,#qty-brownies22,#qty-browniescup"
);

qtyInputs.forEach(input => {

  input.addEventListener(
    "input",
    hitungTotal
  );

});

if(document.getElementById("totalHarga")){
  hitungTotal();
}

// ==========================
// ORDER FORM
// ==========================

const orderForm =
  document.getElementById("orderForm");

if (orderForm) {

  orderForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const nama =
      document.getElementById("nama").value;

    const hp =
      document.getElementById("hp").value;

    const alamat =
      document.getElementById("alamat").value;

    const banana =
      parseInt(document.getElementById("qty-banana").value) || 0;

    const choco =
      parseInt(document.getElementById("qty-choco").value) || 0;

    const brownies =
      parseInt(document.getElementById("qty-brownies").value) || 0;

    const giftbox =
      parseInt(document.getElementById("qty-giftbox").value) || 0;

    let daftarProduk = "";

    if (banana > 0) {
      daftarProduk +=
        `• Banana Bread Original x${banana}\n`;
    }

    if (choco > 0) {
      daftarProduk +=
        `• Chocolate Banana Bread x${choco}\n`;
    }

    if (brownies > 0) {
      daftarProduk +=
        `• Chocolate Brownies x${brownies}\n`;
    }

    if (giftbox > 0) {
      daftarProduk +=
        `• Brownies Gift Box x${giftbox}\n`;
    }

    if (daftarProduk === "") {
      alert(
        "Please select at least one product."
      );
      return;
    }


    const total = hitungTotal();

   const pesan =
`Halo Silvia,

Saya ingin melakukan pemesanan.

Nama:
${nama}

No HP:
${hp}

Alamat Pengiriman:
${alamat}

Pesanan:
${daftarProduk}

Estimasi Total:
Rp ${total.toLocaleString("id-ID")}

Mohon informasi ketersediaan produk, ongkir, dan metode pembayaran.

Terima kasih.`;

    const nomorWA =
      "6282225438899";

    const url =
      `https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`;

    window.open(url, "_blank");

  });

}


// ==========================
// SMOOTH SCROLL
// ==========================

document.querySelectorAll('a[href^="#"]').forEach(link => {

  link.addEventListener("click", function (e) {

    const target =
      document.querySelector(
        this.getAttribute("href")
      );

    if (target) {

      e.preventDefault();

      target.scrollIntoView({
        behavior: "smooth"
      });

    }

  });

});
