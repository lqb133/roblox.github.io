function login() {
  const user = document.getElementById('user').value;
  const pass = document.getElementById('pass').value;

  if (!user || !pass) {
    alert('Vui lòng nhập đầy đủ thông tin');
    return;
  }

  alert('Đăng nhập thành công (DEMO)\nUser: ' + user);
}
