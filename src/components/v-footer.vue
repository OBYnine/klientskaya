<template>
  <footer>
    <p>&copy; {{ currentYear }} Государственная услуга. Все права защищены.</p>
    <p>Адрес: 123456, г. Москва, ул. Примерная, д. 1, стр. 1</p>
    <p>Телефон: 8 (800) 123-45-67</p>
    <p>Email: info@mfc.gov.ru</p>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear()
    }
  }
}
</script>

<style>
footer {
  background-color: #f0f0f0;
  padding: 20px;
  text-align: center;
}
</style>