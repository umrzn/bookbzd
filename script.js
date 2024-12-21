function navigateToContent() {
  // Находим элемент с id "content"
  const contentSection = document.getElementById("content");
  if (contentSection) {
    // Прокручиваем страницу к разделу "Содержание"
    contentSection.scrollIntoView({
      behavior: "smooth", // Плавная прокрутка
      block: "start"      // Прокрутить так, чтобы верх раздела был на экране
    });
  } else {
    console.error("Секция 'Содержание' не найдена.");
  }
}
