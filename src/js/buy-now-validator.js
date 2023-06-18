const input = document.getElementById('clientCardNumber');

input.addEventListener('input', function(event) {
  let value = event.target.value;
  
  // Видаляємо всі роздільники тире та нецифрові символи зі значення поля вводу
  value = value.replace(/[-\D]/g, '');
  
  // Додаємо тире через кожні 4 символи
  value = value.replace(/(.{4})/g, '$1-');
  
  // Видаляємо останнє тире, якщо кількість символів не кратна 4
  if (value.endsWith('-')) {
    value = value.slice(0, -1);
  }
  
  // Оновлюємо значення поля вводу
  event.target.value = value;
});

const clientPhoneNumber = document.getElementById('clientPhoneNumber');

clientPhoneNumber.addEventListener('input', function(event) {
  let value = event.target.value;
  
  // Видаляємо всі роздільники тире та нецифрові символи зі значення поля вводу
  value = value.replace(/[-\D]/g, '');
  
  // Додаємо тире після другого, п'ятого, сьомого та дев'ятого символів
  if (value.length > 2) {
    value = value.slice(0, 2) + '-' + value.slice(2);
  }
  if (value.length > 6) {
    value = value.slice(0, 6) + '-' + value.slice(6);
  }
  if (value.length > 9) {
    value = value.slice(0, 9) + '-' + value.slice(9);
  }
  if (value.length > 14) {
    value = value.slice(0, 14) + '-' + value.slice(14);
  }
  
  // Оновлюємо значення поля вводу
  event.target.value = value;
});

const clientEmail = document.getElementById('clientEmail');

clientEmail.addEventListener('input', function(event) {
  let value = event.target.value;
  
  // Видаляємо всі символи, які не є латинськими літерами, символом @ або крапкою
  value = value.replace(/[^A-Za-z0-9@.]/g, '');
  
  // Оновлюємо значення поля вводу
  event.target.value = value;
});