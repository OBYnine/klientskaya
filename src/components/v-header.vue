<template>
   <header class="header">
  <a href="/MainPage" class="logo">МФЦ</a>
  <nav class="nav-menu">
    <ul class="nav-list">
      <li><router-link to="/MainPage">Главная</router-link></li>
      <li>
  <services-menu></services-menu>
</li>
      <li><a href="#">Новости</a></li>
      <li><a href="/page">Контакты</a></li>
      
      <li><a href="https://github.com/Fozy-qweqwe123/Ekkzamen.git">GitHub</a></li>
      
    </ul>
  </nav>
  <div class="search-container">
    <form action="/search" method="get">
      <input type="text" placeholder="Поиск..." name="search">
      
    </form>
  </div>
  <a style="text-decoration: none;  color: #333;font-weight: bold;" href="/user" class="nav-list">Kirill L.</a>
</header>
  </template>
  <script>
  import ServicesMenu from '@/components/ServicesMenu.vue';
  export default {
      name: 'vHeader',
      components: { 
      ServicesMenu,
    }
  }
 
</script>

  <style scoped>
  .header {
   
    max-width: calc(1436px + 3rem);
    padding: 0 1.5rem;
    margin: 0 auto;
    
  }
  .header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #fff;
  border-bottom: 1px solid rgb(207, 194, 194);
  
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: #e29f0d;
  text-decoration: none;
  padding-right:250px;
}

.nav-menu {
  display: flex;
}

.nav-list {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-list li {
  margin-right: 3rem;

}

.nav-list li:last-child {
  margin-right: 0;
}

.nav-list a {
  color: #333;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease;
}

.nav-list a:hover {
  color: #0077ff;
}

.search-container {
  display: flex;
  align-items: center;
  margin-left: auto;
}

.search-container input[type="text"] {
  padding: 0.5rem;
  border: none;
  border-radius: 2px;
  font-size: 1rem;
  margin-right: 0.5rem;
}

.search-container button {
  background-color: #0077ff;
  color: #fff;
  border: none;
  border-radius: 2px;
  padding: 0.5rem;
  font-size: 1rem;
  cursor: pointer;
}

.search-container button:hover {
  background-color: #0066cc;
}

</style>
  