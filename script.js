function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Semua field wajib diisi.");
    return false;
  }

  alert("Pesan berhasil dikirim!");
  return true;
}
