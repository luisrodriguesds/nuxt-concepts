<template>
  <div>
    <div class="bg-gray-100 px-4">
      <div class="container mx-auto h-10 space-x-4 flex items-center mb-10">
        <NuxtLink :to="{name: 'company'}">A empresa</NuxtLink>
        <NuxtLink to="/services">Serviços</NuxtLink>
        <NuxtLink to="/products">Produtos</NuxtLink>
      </div>
    </div>
    <div>

      <div class="container mx-auto p-4">
        <h1 class="text-lg font-bold">{{$route.params.name}}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dolore vitae, saepe quibusdam voluptatibus aspernatur odit dolores? Iusto itaque reiciendis odit incidunt sed sit quaerat sequi, facilis obcaecati est earum.</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'productName',
  }
</script>

<style lang="scss" scoped>

</style>
