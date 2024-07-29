<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Page1'
});
</script>

<template>
  <div class="page">
    <h1>Страница 1</h1>
    <p>Контент страницы 1</p>
    <router-link to="/" class="back-btn">На главную</router-link>
  </div>
</template>

<style scoped>
.page {
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
.back-btn {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-size: 1.2em;
  transition: background-color 0.3s;
}
.back-btn:hover {
  background-color: rgba(0, 0, 0, 0.7);
}
</style>
