function updateDateTime() {
    const now = new Date();
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    const tanggalSpan = document.querySelector("#tanggal span");
    const jamSpan = document.querySelector("#jam span");
  
    if (tanggalSpan && jamSpan) {
      tanggalSpan.textContent = now.toLocaleDateString("id-ID", options);
      jamSpan.textContent = now.toLocaleTimeString("id-ID");
    }
  }
  
  setInterval(updateDateTime, 1000);
  updateDateTime();
  
  const productCards = document.querySelectorAll(".product-card");
  productCards.forEach((card) => {
    card.addEventListener("click", () => {
      const category = card.getAttribute("data-category");

      const image = card.querySelector(".product-image");

      let newImageSrc = "";
      if (category === "rice") {
        newImageSrc = "img/new-ricebowl.jpg";
      } else if (category === "coffee") {
        newImageSrc = "img/new-latte.jpg"; 
      }

      image.src = newImageSrc;
    });
  });

  function loginKasir() {
    const input = document.getElementById("kasirName");
    const nama = input.value.trim();
    if (nama === "") {
      alert("Masukkan nama kasir terlebih dahulu!");
      return;
    }

    namaKasir = nama;
    document.getElementById("kasirDisplay").textContent = namaKasir;

    const loginForm = document.getElementById("loginForm");
    loginForm.classList.add("fade-out");

    setTimeout(() => {
      loginForm.style.display = "none"; 
      const kasirArea = document.getElementById("kasirArea");
      kasirArea.style.display = "block"; 
      kasirArea.classList.add("fade-in"); 
    }, 300);

    toggleTransaksi(true);
    document.getElementById("tombolRiwayat").disabled = false;
    document.getElementById("btnHapusRiwayat").disabled = false;
  }

  function logoutKasir() {
    if (!confirm("Yakin ingin logout?")) return;
    if (Object.keys(pesanan).length > 0) {
      alert("Selesaikan atau reset transaksi sebelum logout.");
      return;
    }

    namaKasir = "";
    document.getElementById("kasirName").value = "";
    document.getElementById("kasirDisplay").textContent = "";

    const kasirArea = document.getElementById("kasirArea");
    kasirArea.classList.add("fade-out");

    setTimeout(() => {
      kasirArea.style.display = "none"; 
      const loginForm = document.getElementById("loginForm");
      loginForm.style.display = "block";
      loginForm.classList.add("fade-in"); 
    }, 300); 

    toggleTransaksi(false);
    resetTransaksi();
    document.getElementById("tombolRiwayat").disabled = true; 
    document.getElementById("btnHapusRiwayat").disabled = true; 
  }

  function toggleTransaksi(status) {
    const tombolMenu = document.querySelectorAll("nav button");
    tombolMenu.forEach((btn) => (btn.disabled = !status));

    document.getElementById("bayarInput").disabled = !status;
    document.getElementById("btnCetak").disabled = !status;
    document.querySelector("button[onclick='resetTransaksi()']").disabled =
      !status;

    const menuItems = document.querySelectorAll(".menu-section button");
    menuItems.forEach((btn) => (btn.disabled = !status));
  }

  function searchMenu() {
    const query = document.getElementById("searchInput").value.toLowerCase();
    const allItems = document.querySelectorAll(".menu-item");
  
    allItems.forEach((item) => {
      const namaMenu = item.querySelector("h4").textContent.toLowerCase();
      if (namaMenu.includes(query)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  }
  const menus = {
    coffee: [
      { nama: "Espresso", harga: 15000, gambar: "images/espresso.jpg" },
      { nama: "Cappuccino", harga: 18000, gambar: "images/cappucino.jpg" },
      { nama: "Americano", harga: 20000, gambar: "images/americano.jpg" },
      { nama: "Vietnam Drip", harga: 23000, gambar: "images/vietnamdrip.jpg" },
      { nama: "Kopi Susu", harga: 15000, gambar: "images/kopisusu.jpg" },
      { nama: "Signature Coffee", harga: 25000, gambar: "images/signaturecoffee.jpg" },
      { nama: "Blacksweet Coffee", harga: 23000, gambar: "images/blacksweetcoffee.jpg" },
    ],
    non: [
      { nama: "Beach Rainbow", harga: 30000, gambar: "images/beachrainbow.jpg" },
      { nama: "Blue Mojito", harga: 27000, gambar: "images/bluemojito.jpg"},
      { nama: "Lemon Squash", harga: 17000, gambar: "images/lemonsquash.jpg" },
      { nama: "Orange Squash", harga: 17000, gambar: "images/orangesquash.jpg"},
      { nama: "ChocoLatte", harga: 24000, gambar: "images/choco.jpg" },
      { nama: "Red Velvet Latte", harga: 23000, gambar: "images/redvelvet.jpg" },
      { nama: "Taro Latte", harga: 23000, gambar: "images/taro.jpg"},
      { nama: "Matcha Latte", harga: 23000, gambar: "images/matcha.jpg"},
      { nama: "Strawberry tea", harga: 13000, gambar: "images/strawberry.jpg" },
      { nama: "Peach tea", harga: 13000, gambar: "images/peach.jpg" },
      { nama: "Lychee tea", harga: 13000, gambar: "images/lychee.jpg"},
      { nama: "Ice tea", harga: 8000, gambar: "images/icetea.jpg"},
      { nama: "Water ice", harga: 5000, gambar: "images/waterice.jpg"},
    ],
    snack: [
      { nama: "Beef Burger", harga: 25000, gambar: "assets/beffburger.jpg" },
      { nama: "Sandwich", harga: 20000, gambar: "assets/sandwich.jpg" },
      { nama: "Pancake", harga: 25000, gambar: "assets/pancake.jpg" },
      { nama: "Donut", harga: 20000, gambar: "assets/donat.jpg" },
      { nama: "Pisang bakar", harga: 20000, gambar: "assets/pisangbakar.jpg" },
      { nama: "Roti Bakar", harga: 20000, gambar: "assets/rotibakar.jpg" },
      { nama: "Dimsum", harga: 25000, gambar: "assets/dimsum.jpg" },
      { nama: "French Freis", harga: 20000, gambar: "assets/frenchfreis.jpg" },
      { nama: "Otak otak", harga: 20000, gambar: "assets/otak.jpg" },

    ],
    food: [
      { nama: "Chiken Teriyaki", harga: 30000, gambar: "assets/teriyaki.jpg" },
      { nama: "Chicken Katsu", harga: 30000, gambar: "assets/chicken.jpg" },
      { nama: "Rice bowl Chicken", harga: 25000, gambar: "assets/katsu.jpg" },
      { nama: "Ayam Bakar", harga: 20000, gambar: "assets/bakar.jpg" },
      { nama: "Ayam Geprek", harga: 20000, gambar: "assets/geprek.jpg" },
      { nama: "Nasi Goreng", harga: 20000, gambar: "assets/nasgor.jpg" },
      { nama: "Spaghetti", harga: 25000, gambar: "assets/sphageti.jpg" },
      { nama: "Mie Goreng telur", harga: 20000, gambar: "assets/mietelur.jpg" },
      { nama: "Mie Goreng", harga: 17000, gambar: "assets/mie.jpg" },
    ],
  };

  let namaKasir = ""; 
  let pesanan = {};

  function renderMenus() {
    for (let kategori in menus) {
      const container = document.getElementById(kategori);
      menus[kategori].forEach((menu) => {
        const div = document.createElement("div");
        div.className = "menu-item";

        const idJumlah = `jumlah-${menu.nama.replace(/\s+/g, "_")}`;

        div.innerHTML = `
          <img src="${menu.gambar}" alt="${menu.nama}" />
          <h4>${menu.nama}</h4>
          <p>Rp ${menu.harga.toLocaleString()}</p>
          <div style="display: flex; justify-content: center; align-items: center; gap: 0.5rem;">
            <button onclick="kurangiPesanan('${menu.nama}')">-</button>
            <span class="jumlah" id="${idJumlah}">0</span>
            <button onclick="tambahPesanan('${menu.nama}', ${
          menu.harga
        })">+</button>
          </div>
        `;
        container.appendChild(div);
      });
    }
  }

  function showMenu(id) {
    if (!namaKasir) {
      alert("Silakan login terlebih dahulu.");
      return;
    }
    document.querySelectorAll("nav button").forEach((btn) => {
      btn.classList.remove("active-button");
    });
    event.target.classList.add("active-button");
    document.querySelectorAll(".menu-section").forEach((section) => {
      section.classList.remove("active", "animate-slide");
    });
    const selected = document.getElementById(id);
    selected.classList.add("active", "animate-slide");
  }

  function tambahPesanan(nama, harga) {
    if (!namaKasir) {
      alert("Silakan login terlebih dahulu.");
      return;
    }
    if (!pesanan[nama]) pesanan[nama] = { qty: 0, harga };
    pesanan[nama].qty++;
    updateOrderList();
  }

  function kurangiPesanan(nama) {
    if (!namaKasir) {
      alert("Silakan login terlebih dahulu.");
      return;
    }
    if (pesanan[nama]) {
      pesanan[nama].qty--;
      if (pesanan[nama].qty <= 0) delete pesanan[nama];
      updateOrderList();
    }
  }

  function updateOrderList() {
    const tbody = document.getElementById("orderList");
    tbody.innerHTML = "";
    let total = 0;

    for (let nama in pesanan) {
      const item = pesanan[nama];
      const subtotal = item.qty * item.harga;
      total += subtotal;

      const row = `<tr><td>${nama}</td><td>${
        item.qty
      }</td><td>Rp ${subtotal.toLocaleString()}</td></tr>`;
      tbody.innerHTML += row;

      const spanJumlah = document.getElementById(
        `jumlah-${nama.replace(/\s+/g, "_")}`
      );
      if (spanJumlah) spanJumlah.textContent = item.qty;
    }

    const semuaSpan = document.querySelectorAll("span[id^='jumlah-']");
    semuaSpan.forEach((span) => {
      const namaProduk = span.id.replace("jumlah-", "").replace(/_/g, " ");
      if (!pesanan[namaProduk]) span.textContent = 0;
    });

    document.getElementById("total").textContent = total.toLocaleString();
    document.getElementById("strukArea").style.display = "none";
  }

  function getNextTransactionNumber() {
    let lastNumber = localStorage.getItem("lastTransactionNumber");
    let nextNumber = lastNumber ? parseInt(lastNumber) + 1 : 1;
    let formattedNumber = nextNumber.toString().padStart(4, "0");
    localStorage.setItem("lastTransactionNumber", formattedNumber);
    return formattedNumber;
  }

  function getTransaksiId(transactionNumber) {
    return `TRXKC-${transactionNumber}`;
  }

  function prosesPembayaran() {
    if (!namaKasir) {
      alert("Silakan login terlebih dahulu sebagai kasir.");
      return;
    }

    if (Object.keys(pesanan).length === 0) {
      alert("Tidak ada menu yang dipilih. Silakan tambahkan item ke pesanan.");
      return;
    }

    const namaPelanggan = document
      .getElementById("namaPelanggan")
      .value.trim();
    if (!namaPelanggan) {
      alert("Masukkan nama pelanggan.");
      return;
    }

    const bayarInput = document.getElementById("bayarInput").value;
    if (bayarInput.trim() === "") {
      alert("Masukkan nominal pembayaran.");
      return;
    }
    const bayar = parseInt(document.getElementById("bayarInput").value);
    const total = parseInt(
      document.getElementById("total").textContent.replace(/[^\d]/g, "")
    );
    if (isNaN(bayar) || bayar < total) {
      document.getElementById("strukArea").style.display = "none";
      return;
    }

    const kembalian = bayar - total;
    document.getElementById(
      "kembalian"
    ).value = `Rp ${kembalian.toLocaleString()}`;
    const tanggal = new Date().toLocaleString();

    const transactionNumber = getNextTransactionNumber();
    const transaksiId = getTransaksiId(transactionNumber);

    const rows = document.querySelectorAll("#orderList tr");
    const struk = document.getElementById("isiStruk");
    struk.innerHTML = `
<pre>
===============================
        KATA-COFFE
   Jl. Kopi Mantap No.1
-------------------------------
Kasir        : ${namaKasir}
ID Transaksi : ${transaksiId}
Pelanggan    : ${namaPelanggan}
No. Urut     : ${transactionNumber}
Tanggal      : ${tanggal}
-------------------------------
${Array.from(rows)
.map(
(row) =>
  `${row.cells[0].textContent.padEnd(
    15
  )} x ${row.cells[1].textContent.padEnd(4)} ${row.cells[2].textContent}`
)
.join("\n")}
-------------------------------
Total        : Rp ${total.toLocaleString()}
Bayar        : Rp ${bayar.toLocaleString()}
Kembalian    : Rp ${kembalian.toLocaleString()}
===============================
        Terima kasih
</pre>`;

    document.getElementById("btnCetak").style.display = "inline-block";
    document.getElementById("strukArea").style.display = "block";

    simpanRiwayatTransaksi(transaksiId, tanggal, total);
    lihatRiwayat();
}


  function simpanRiwayatTransaksi(id, tanggal, total) {
    const riwayat = JSON.parse(localStorage.getItem("riwayat")) || [];

    const dataPesanan = Object.keys(pesanan).map((nama) => {
      return { nama, qty: pesanan[nama].qty, harga: pesanan[nama].harga };
    });

    riwayat.push({
      id,
      tanggal,
      total,
      kasir: namaKasir,
      pelanggan: namaPelanggan,
      pesanan: dataPesanan,
    });

    localStorage.setItem("riwayat", JSON.stringify(riwayat));
  }

  function cetakStruk() {
    window.print();
  }
  function resetTransaksi() {
    if (!namaKasir) {
      alert("Silakan login terlebih dahulu.");
      return;
    }
    document.getElementById("bayarInput").value = "";
    document.getElementById("kembalian").value = ""; 

    document.getElementById("strukArea").style.display = "none";
    document.getElementById("btnCetak").style.display = "none";

    document.getElementById("orderList").innerHTML = "";

    document.getElementById("total").textContent = "Rp 0";

    pesanan = {};

    const semuaSpan = document.querySelectorAll("span[id^='jumlah-']");
    semuaSpan.forEach((span) => {
      span.textContent = 0; 
    });
    document.getElementById("namaPelanggan").value = "";
  }

  function lihatRiwayat() {
    const tbody = document.querySelector("#tabelRiwayat tbody");
    tbody.innerHTML = "";
    const riwayat = JSON.parse(localStorage.getItem("riwayat")) || [];

    riwayat.forEach((trx) => {
      const row = document.createElement("tr");

      const detailPesanan = (trx.pesanan || [])
        .map(
          (item) =>
            `${item.nama} x${item.qty} @Rp ${item.harga.toLocaleString()}`
        )
        .join("<br>");

      row.innerHTML = `
        <td>${trx.id}</td>
        <td>${trx.tanggal}</td>
        <td>${detailPesanan}</td>
        <td>Rp ${trx.total.toLocaleString()}</td>
      `;
      tbody.appendChild(row);
    });
  }
  function tampilkanRiwayat() {
    if (!namaKasir) {
      alert("Silakan login terlebih dahulu.");
      return;
    }

    lihatRiwayat();
    document.getElementById("riwayatModal").style.display = "block";
  }

  function tutupRiwayat() {
    document.getElementById("riwayatModal").style.display = "none";

    document.getElementById("cariRiwayat").value = "";

    const rows = document.querySelectorAll("#tabelRiwayat tbody tr");
    rows.forEach((row) => {
      row.style.display = ""; 
    });
  }
  function hapusRiwayat() {
    if (!namaKasir) {
      alert("Silakan login terlebih dahulu untuk menghapus riwayat.");
      return;
    }
    if (confirm("Yakin ingin menghapus semua riwayat transaksi?")) {
      localStorage.removeItem("lastTransactionNumber");
      localStorage.removeItem("riwayat");
      lihatRiwayat();
    }
  }
  function filterRiwayat() {
    const input = document
      .getElementById("cariRiwayat")
      .value.trim()
      .toUpperCase();

    if (!input) {
      alert("Silakan masukkan ID transaksi untuk pencarian.");
      return;
    }

    const rows = document.querySelectorAll("#tabelRiwayat tbody tr");

    rows.forEach((row) => {
      const kolomId = row.querySelector("td:first-child"); 
      const teksId = kolomId?.textContent.trim().toUpperCase(); 

      row.style.display = teksId === input ? "" : "none";
    });
  }
  function laporanBulanan() {
    if (!namaKasir) {
        alert("Silakan login terlebih dahulu untuk melihat laporan bulanan.");
        return;
    }

    const riwayat = JSON.parse(localStorage.getItem("riwayat")) || [];
    const laporan = {};

    if (riwayat.length === 0) {
        alert("Tidak ada data riwayat transaksi.");
        return;
    }

    riwayat.forEach((trx) => {
        if (!trx.tanggal) return;

        const [tgl, jam] = trx.tanggal.split(" "); 
        const [dd, mm, yyyy] = tgl.split("/");

        const bulan = parseInt(mm); 
        const tahun = parseInt(yyyy);
        const key = `${mm}/${yyyy}`;

        const namaBulan = new Date(tahun, bulan - 1, 1).toLocaleString("id-ID", {
            month: "long",
            year: "numeric"
        });

        const keterangan = `Penjualan Bulan ${namaBulan}`;

        if (!laporan[key]) {
            laporan[key] = { keterangan: keterangan, total: 0, transaksi: [] };
        }

        laporan[key].total += trx.total;
        laporan[key].transaksi.push(trx);
    });

    tampilkanLaporan(laporan);
}

function tampilkanLaporan(laporan) {
    const laporanTbody = document.getElementById("tabelLaporanBulanan").getElementsByTagName("tbody")[0];
    laporanTbody.innerHTML = "";

    if (Object.keys(laporan).length === 0) {
        const row = document.createElement("tr");
        row.innerHTML = `<td colspan="3">Tidak ada transaksi yang ditemukan untuk laporan bulanan.</td>`;
        laporanTbody.appendChild(row);
        return;
    }

    for (let key in laporan) {
        const row = document.createElement("tr");

        const transaksiDetails = laporan[key].transaksi.map(
            (trx) => `ID: ${trx.id}, Total: Rp ${trx.total.toLocaleString()}`
        ).join("<br>");

        row.innerHTML = `
            <td>${laporan[key].keterangan}</td>
            <td>Rp ${laporan[key].total.toLocaleString()}</td>
            <td>${transaksiDetails}</td>
        `;
        laporanTbody.appendChild(row);
    }

    document.getElementById("laporanBulananModal").style.display = "block";
}

function tutupLaporanBulanan() {
    document.getElementById("laporanBulananModal").style.display = "none";
}

  
  
  document.addEventListener("DOMContentLoaded", () => {
    renderMenus();
    showMenu("coffee");
  });
