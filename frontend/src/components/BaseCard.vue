<script setup>
defineProps({
  id: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="card">
    <div class="card-header">
      {{ id }}
    </div>
    <div class="card-front-image">

    </div>
    <div class="card-footer">
      {{ name }}
    </div>
    <div class="card-back-side">
      {{ description }}
    </div>
  </div>
</template>

<style scoped>

</style>