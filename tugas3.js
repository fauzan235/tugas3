
const headerUtama = document.getElementById("header-utama");
if (headerUtama) {
  headerUtama.textContent = "Seleksi ID Berhasil";
}

const produkItems = Array.from(document.getElementsByClassName("produk-item"));
produkItems.forEach(item => {
  item.classList.add("tebal");
  item.textContent = "[UPDATED] " + item.textContent;
});

const statusElement = document.querySelector('[data-status="pending"]');
if (statusElement) {
  statusElement.style.backgroundColor = "yellow";
}

const listItems = document.querySelectorAll("ul li");
listItems.forEach(li => {
  li.innerHTML = "<span>Konten Baru dari JS</span>";
});

