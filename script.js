const menuItems = [
  "Мне нужно снять заказ",
  "Я забираю заказ",
  "Я доставляю заказ",
  "Я давно не получал заказы, почему?",
  "Слетел принятый заказ",
  "Опаздываю на заказ",
  "Жалобы",
  "Мой партнерский аккаунт",
  "Платежи",
  "Связаться с курьерской командой",
  "Мои чаты"
];

const pageUrls = {
  "Мне нужно снять заказ": "cancel-order.html",
  "Я забираю заказ": "pickup-order.html",
  "Я доставляю заказ": "deliver-order.html",
  "Я давно не получал заказы, почему?": "no-orders.html",
  "Слетел принятый заказ": "lost-order.html",
  "Опаздываю на заказ": "late.html",
  "Жалобы": "complaints.html",
  "Мой партнерский аккаунт": "account.html",
  "Платежи": "payments.html",
  "Связаться с курьерской командой": "contact.html",
  "Мои чаты": "chats.html"
};

document.querySelectorAll('.menu li').forEach(item => {
  item.addEventListener('click', () => {
    const url = pageUrls[item.textContent];
    if (url) {
      window.location.href = url;
    }
  });
});
