<template>
  <div class="container">
    <h2>Профиль</h2>
    <div class="profile">
    <div v-if="!isEditing">
      <p>Имя: {{ profile.name }}</p>
      <p>Электронная почта: {{ profile.email }}</p>
      <p>Телефон: {{ profile.phone }}</p>
      <p>Адрес: {{ profile.address }}</p>
      <button @click="isEditing = true">Редактировать</button>
    </div>
    <div v-else>
      <label>Имя:</label>
      <input v-model="editedProfile.name" type="text">
      <label>Электронная почта:</label>
      <input v-model="editedProfile.email" type="email">
      <label>Телефон:</label>
      <input v-model="editedProfile.phone" type="tel">
      <label>Адрес:</label>
      <input v-model="editedProfile.address" type="text">
      <button @click="saveProfile">Сохранить</button>
      <button @click="isEditing = false">Отмена</button>
    </div>
  </div>
    <h2>Платежи</h2>
    <table class="table">
      <thead>
        <tr>
          <th>Дата</th>
          <th>Описание</th>
          <th>Сумма</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="payment in payments" :key="payment.date">
          <td>{{ payment.date }}</td>
          <td>{{ payment.description }}</td>
          <td>{{ payment.amount }}</td>
        </tr>
      </tbody>
    </table>
    <h2>Запросы</h2>
    <table class="table">
      <thead>
        <tr>
          <th>Дата</th>
          <th>Описание</th>
          <th>Статус</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="request in requests" :key="request.date">
          <td>{{ request.date }}</td>
          <td>{{ request.description }}</td>
          <td>{{ request.status }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import jsonData from '@/data/data.json'

export default {
  name: 'UserProfile',
  data() {
    return {
      profile: {},
      editedProfile: {},
      isEditing: false,
      payments: [],
      requests: []
    };
    
  },
  methods: {
    saveProfile() {
      this.profile = Object.assign({}, this.editedProfile);
      this.isEditing = false;
    },
  },
  watch: {
    profile: {
      handler() {
        this.editedProfile = Object.assign({}, this.profile);
      },
      immediate: true,
    },
  },
  mounted() {
    this.profile = jsonData.profile;
    this.payments = jsonData.payments;
    this.requests = jsonData.requests;
  }
  
};
</script>

<style scooped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  padding-bottom: 100px;
}



.profile {
  margin-bottom: 20px;
}

.profile-info {
  margin: 0;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.payments-header {
  margin-top: 40px;
  margin-bottom: 20px;
}

.requests-header {
  margin-top: 40px;
  margin-bottom: 20px;
}

.table {
  width: 100%;
  border-collapse: collapse;
}

.table th,
.table td {
  padding: 10px;
  border: 1px solid #ddd;
}

.table th {
  background-color: #f5f5f5;
  font-weight: bold;
}

.table td {
  text-align: center;
}

</style>