function validateName(name) {
    if (name === "") {
        return "Nama tidak Valid"
    }

    if (name.length < 3) {
        return "Nama terlalu pendek"
    }
}

function validateAddress(alamat) {
    if (alamat === "") {
        return "Alamat tidak Valid"
    }

    if (alamat.length < 10) {
        return "Alamat terlalu pendek"
    }
}