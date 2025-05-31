document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const toggle = document.getElementById('darkModeToggle');

  // تفعيل الوضع الداكن تلقائيًا إن كان مفعل سابقًا
  if (localStorage.getItem('darkMode') === 'true') {
    body.classList.add('dark-mode');
    if (toggle) toggle.checked = true;
  }

  // فقط في صفحة الإعدادات (الزر موجود)
  if (toggle) {
    toggle.addEventListener('change', () => {
      const isDark = toggle.checked;
      body.classList.toggle('dark-mode', isDark);
      localStorage.setItem('darkMode', isDark ? 'true' : 'false');
    });
  }
});