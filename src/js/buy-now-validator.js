const input = document.getElementById('clientCardNumber');

input.addEventListener('input', function(event) {
  let value = event.target.value;
  
  // Видаляємо всі нецифрові символи зі значення поля вводу
  value = value.replace(/\D/g, '');
  
  // Додаємо пробіл після кожних 4 символів
  value = value.replace(/(.{4})/g, '$1 ');
  
  // Оновлюємо значення поля вводу
  event.target.value = value;
});

input.addEventListener('keydown', function(event) {
  // Перевіряємо, чи натиснута клавіша Backspace
  if (event.key === 'Backspace') {
    // Видаляємо пробіли перед видаленням символу
    let value = input.value.replace(/\s/g, '');
    
    // Перевіряємо, чи поле вводу не пусте
    if (value.length > 0) {
      // Видаляємо останній символ
      value = value.slice(0, -1);
      
      // Форматуємо значення поля вводу знову
      value = value.replace(/(.{4})/g, '$1 ');
    }
    
    // Оновлюємо значення поля вводу
    input.value = value;
    
    // Зупиняємо дійсний ввід клавіші Backspace
    event.preventDefault();
  }
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