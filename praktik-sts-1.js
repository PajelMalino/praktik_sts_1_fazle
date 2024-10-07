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
    return "Nomor telepon tidak Valid";
  }

  if (nomortelepon.length < 10 || nomortelepon.length > 13) {
    return "Panjang nomor telepon tidak valid";
  }

  if (nomortelepon.test(nomortelepon)) {
    return "Nomor telepon hanya boleh berisi angka";
  }

  return "Nomor telepon Validd";
}

function validateEmail(email) {
  if (email === "") {
    return "Email tidak valid";
  }

  if (email.length < 5) {
    return "Email terlalu pendek";
  }

  if (!email.includes("@")) {
    return "Email tidak valid";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return "Format email tidak valid";
  }

  return "Email Valid";
}

function validateTanggalLahir(tanggal_lahir) {
    if (tanggal_lahir === "") {
        return "Tanggal Lahir tidak valid"
    }

    const tanggal_lahirObj = new Date(tanggal_lahir);

    if (isNaN(tanggal_lahirObj.getTime())) {
        return "Format Tanggal Lahir tidak Valid"
    }

    const now = new Date();

    if (tanggal_lahirObj >= now) {
        return "Tanggal Lahir tidak Valid (Tanggal di masa depan)"
    }

    return "Tanggal lahir valid"
}

function validateAkses(role, status) {
    if (role === "admin") {
        return "Akses diizinkan"
    } else if (role === 'user' && status === 'active') {
        return "Akses diizinkan"
    } else {
        return "Akses ditolak"
    }
}