function login() {
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorMsg = document.getElementById('error-msg');
    const successMsg = document.getElementById('success-msg');
  
    errorMsg.textContent = '';
    successMsg.textContent = '';
  
    // Regex email sederhana (cukup untuk validasi dasar)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    // Cek kekosongan
    if (!email && !password) {
      errorMsg.textContent = 'Email dan password tidak boleh kosong.';
      return;
    }else if (!email) {
      errorMsg.textContent = 'Email tidak boleh kosong.';
      return;
    } else if (!password) {
      errorMsg.textContent = 'Password tidak boleh kosong.';
      return;
    }
  
    // Cek format email
    if (!emailRegex.test(email)) {
      errorMsg.textContent = 'Format email tidak valid.';
      return;
    }
  
    // Cek login
    if (email === 'exchange@gmail.com' && password === '151228') {
      window.location.href = 'dashboard.html'; // Arahkan ke halaman sukses
    } else {
      errorMsg.textContent = 'Email atau password salah.';
    }
  }