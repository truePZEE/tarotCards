<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Home'
});
</script>

<template>
  <div class="home">
    <h1>Главное меню</h1>
    <div class="menu">
      <router-link to="/" class="btn">Страница 1</router-link>
      <router-link to="/reading" class="btn">Страница 2</router-link>
    </div>
  </div>
</template>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: url('../../public/img/background/main-background.jpg') no-repeat center center fixed;
  background-size: cover;
  color: white;
  text-align: center;
}
.menu {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.btn {
  padding: 10px 20px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-size: 1.2em;
  transition: background-color 0.3s;
}
.btn:hover {
  background-color: rgba(0, 0, 0, 0.7);
}
</style>