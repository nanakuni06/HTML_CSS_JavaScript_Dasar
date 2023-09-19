// Tambahkan kode JavaScript kalian di file ini

// mengakses input & me return object
function handleGetFormData() {
    return {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      city: document.getElementById("city").value,
      zipCode: document.getElementById("zip-code").value,
      status: document.getElementById("status").checked
    }
  }
  
  // mengecek isi input zipCode
  function isNumber(string) {
    return !isNaN(string) ? true : false;
  }
  
  // function mengecek isi status
  function checkboxIsChecked() {
    const formData = handleGetFormData();
    return formData.status === true ? true : false;
  }
  
  // function mengecek 3 fungsi diatas
  function validateFormData(formData) {
    const string = formData.zipCode;
  
    for (const key in formData) {
      if (formData.hasOwnProperty(key) && formData[key] === "") {
        return false;
      }
    }
    return isNumber(string) && checkboxIsChecked();
  }
  
  // function validasi input field
  function submit() {
    const formData = handleGetFormData();
    const response = document.getElementById("warning");
  
    if (!validateFormData(formData)) {
      response.textContent = "Periksa form anda sekali lagi";
    } else {
      response.textContent = "";
    }
  }
  
  // event handler button input
  document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("submit-form").addEventListener(
      "click",
      function (event) {
        event.preventDefault();
        submit();
      },
      false
    );
  });