<template>
  <main class="main">
   <div class="container">
     <h1 class="page-title">Контактная <br>информация</h1>
     <h1 style="font-size=44px;padding-bottom: 100px;">Государственное бюджетное учреждение города Москвы "Многофункциональные центры предоставления государственных услуг города Москвы"
</h1>
     <div class="content-wrapper">
       <div class="contacts">
         <div class="contacts__item">
           <h2 class="contacts__title">Контактный телефон</h2>
           <p class="contacts__value">+7 (495) 539-30-03</p>
         </div>
         <div class="contacts__item">
           <h2 class="contacts__title">Адрес</h2>
           <p class="contacts__value">г. Москва, ул кирова 39</p>
         </div>
         <div class="contacts__item">
           <h2 class="contacts__title">Электронная почта</h2>
           <p class="contacts__value">info@md.mos.ru</p>
         </div>
         <div class="contacts__item">
           <h2 class="contacts__title">Часы работы</h2>
           <p class="contacts__value">Пн-Пт: 09:00-18:00</p>
         </div>
       </div>
       <div class="spacer"></div>
     </div>
   </div>
 </main>
</template>

<style scoped>

/* Общие стили */

* {
 margin: 0;
 padding: 0;
 box-sizing: border-box;
}



.container {
 max-width: 1200px;
 margin: 0 auto;
 padding: 0 20px;
}

a {
 color: #0084ff;
 text-decoration: none;
}

ul {
 list-style: none;
}



/* Стили для основного контента */

.main {
 padding-bottom: 50px;
}

.page-title {
 font-size: 56px;
 font-weight:bold;
margin-top: 50px;
margin-bottom: 30px;
line-height: 1.2;
}

.content-wrapper {
display: flex;
justify-content: space-between;
align-items: flex-start;
flex-wrap: wrap;
}

.contacts {
display: flex;
flex-direction: column;
}

.contacts__item {
margin-bottom: 30px;
}

.contacts__title {
font-size: 24px;
font-weight: bold;
margin-bottom: 10px;
}

.contacts__value {
font-size: 18px;
color: #555555;
}

.spacer {
width: 50%;
}

@media screen and (max-width: 767px) {
.page-title {
font-size: 40px;
}

.contacts__title {
font-size: 20px;
}

.contacts__value {
font-size: 16px;
}

.spacer {
display: none;
}
}

</style>
