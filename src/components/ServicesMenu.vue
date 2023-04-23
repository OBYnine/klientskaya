<template>
    <div>
      <div class="services-menu-container">
      <button class="services-btn" @click="showServices = !showServices">Услуги</button>
      <ul v-if="showServices" class="services-menu">
        <li v-for="(service, index) in services" :key="index">{{ service }}</li>
      </ul>
    </div>
  </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showServices: false,
        services: ["Полный перечень услуг", "Жизненные ситуации", "Электронные услуги", "Меры социальной поддержки"],
      };
    },
  };
  </script>
  
  <style>
  .services-btn {
    background-color: #fff;
    color: #333;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    padding-top: 0px;
    font-weight: bold;
  }
  
  .services-menu {
    position: absolute;
  top: 100%;
  left: 0;
  z-index: 999;
  width: 200px;
  height: auto;
    list-style: none;
    padding: 0;
    margin: 10px 0 0 0;
    border: 1px solid #ddd;
    border-radius: 5px;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 999;

  }
  
  .services-menu li {
    padding: 10px;
    cursor: pointer;
  }
  
  .services-menu li:hover {
    background-color: #f5f5f5;
  }
  .services-menu-container {
  position: relative;
  display: inline-block;
}

  </style>