const header = document.getElementsByTagName('header')[0];

header.innerHTML = `
  <div class="header">
    <div class="title">
      <a href="./index.html">Кустовой вычислительный центр</a>
    </div>
    <div class="description">
      <a href="./index.html">Жилищно-коммунальное хозяйство</a>
    </div>
  </div>
  <div class="navigation">
    <div><a href="./index.html">Главная</a></div>
    <div><a href="./history.html">История</a></div>
    <div><a href="./emergencyPhones.html">Телефоны экстренных служб</a></div>
    <div><a href="./contacts.html">Контакты</a></div>
  </div>
`;
