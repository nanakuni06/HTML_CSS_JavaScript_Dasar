// 6. Membaca isi dari inputan
function handleGetFormData() {
  const name = document.getElementById("name").value;
  const city = document.getElementById("city").value;
  const email = document.getElementById("email").value;
  const zipCode = document.getElementById("zip-code").value;
  const status = document.getElementById("status").checked;

  return {
    name,
    city,
    email,
    zipCode,
    status
  };
}

// 7. Validasi zip-code
function isNumber(value) {
  return !isNaN(value);
}

// 8. Validasi checkbox
function checkboxIsChecked() {
  return document.getElementById("status").checked;
}

// 9. Validasi semua inputan
function validateFormData(formData) {
  if (
    formData &&
    isNumber(formData.zipCode) &&
    formData.status === true
  ) {
    return true;
  } else {
    return false;
  }
}

// 10. Proses submit
function submit(event) {
  event.preventDefault();
  const formData = handleGetFormData();

  if (!validateFormData(formData)) {
    const warningDiv = document.getElementById("warning");
    warningDiv.textContent = "Periksa form anda sekali lagi";
    warningDiv.style.color = "red";
    warningDiv.style.fontSize = "14px";

    // Menghilangkan pesan setelah 3 detik
    setTimeout(() => {
      warningDiv.textContent = "";
    }, 3000);

  } else {
    const warningDiv = document.getElementById("warning");
    warningDiv.textContent = "";
    // Lakukan proses submit data


    // Reset inputan pada label
    form.reset();
  }
}

// Menghubungkan function submit dengan form
const form = document.querySelector("form");
form.addEventListener("submit", submit);