<template>
  <div>
    <h1 class="text-lg font-bold">Serviços</h1>
    <div class="space-x-4 mb-4">
      <NuxtLink to="/services/lavar-roupa">Lavar roupas</NuxtLink>
      <NuxtLink to="/services/passar-roupa">Passar roupas</NuxtLink>
    </div>
    <!-- <pre>{{$fetchState}}</pre> -->
    <div v-if="$fetchState.pending">
      Carregando...
    </div>
    <ul>
      <li v-for="(service, index) in services" :key="service.id" class="border-b border-gray-400 py-3">
        {{index+1}} - {{service.username}}
      </li>
    </ul>
    <br><br>
    <NuxtChild />
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      services: [],
    };
  },
  async fetch() {
    // AQUI TEM ACESSO AO THIS
    await new Promise((resolve) => setTimeout(resolve, 2000));
    this.services = await this.$axios.$get('https://jsonplaceholder.typicode.com/users?_limit=3')
  },
};
</script>

<style lang="scss" scoped>
</style>
