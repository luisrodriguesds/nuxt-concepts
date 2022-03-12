<template>
  <div>
    <h1 class="text-lg font-bold">Serviços</h1>
    <div class="space-x-4">
        <NuxtLink to="/services/lavar-roupa">Lavar roupas</NuxtLink>
        <NuxtLink to="/services/passar-roupa">Passar roupas</NuxtLink>
      </div>
    <NuxtChild />
  </div>
</template>

<script>
  export default {
    name: '',
  }
</script>

<style lang="scss" scoped>

</style>
