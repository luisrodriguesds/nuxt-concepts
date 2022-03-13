<template>
  <div>
    <div class="bg-gray-100 px-4">
      <div class="container mx-auto h-10 space-x-4 flex items-center mb-10">
        <NuxtLink :to="{name: 'company'}">A empresa</NuxtLink>
        <NuxtLink to="/services">Serviços</NuxtLink>
        <NuxtLink to="/products">Produtos</NuxtLink>
        <NuxtLink to="/login">Login</NuxtLink>
      </div>
    </div>
    <div>
      <div class="container mx-auto px-4">
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: '',
    middleware: 'auth'
  }
</script>

<style lang="scss" scoped>

</style>
