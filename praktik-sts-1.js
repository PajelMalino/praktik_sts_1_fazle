function validateName(name) {
  if (name === "") {
    return "Nama tidak valid";
  }

  if (name.length < 3) {
    return "Nama terlalu pendek";
  }

  return "Nama Valid";
}

function validateAddress(alamat) {
  if (alamat === "") {
    return "Alamat tidak valid";
  }

  if (address.length < 10) {
    return "Alamat terlalu pendek";
  }

  return "Alamat valid";
}

function validatePhoneNumber(nomortelepon) {
    if (nomortelepon === "") {
        return "Nomor telepon tidak Valid"
    }

    if (nomortelepon.length < 10 || nomortelepon.length > 13) {
        return "Panjang nomor telepon tidak valid"
    }

    if (nomortelepon.test(nomortelepon)) {
        return "Nomor telepon hanya boleh berisi angka"
    }

    return "Nomor telepon Validd"
}

function validateEmail(email) {
    if (email === "") {
      return "Email tidak valid"
    }

    if (email.length < 5) {
      return "Email terlalu pendek"
    }
  
    if (!email.includes("@")) {
      return "Email tidak valid"
    }
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return "Format email tidak valid"
    }

    return "Email Valid"
  }