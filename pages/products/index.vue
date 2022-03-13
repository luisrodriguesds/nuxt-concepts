<template>
  <div>
    <h1 class="text-lg font-bold">Produtos</h1>
    <div class="space-x-4">
      <NuxtLink to="/products/product-a">Produto A</NuxtLink>
      <NuxtLink to="/products/product-b">Produto B</NuxtLink>
    </div>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dolore
      vitae, saepe quibusdam voluptatibus aspernatur odit dolores? Iusto itaque
      reiciendis odit incidunt sed sit quaerat sequi, facilis obcaecati est
      earum.
    </p>
    <div>
      <ul>
        <li v-for="(product, index) in products" :key="product.id" class="border-b border-gray-400 py-3">
         {{index + 1}} - {{product.title}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "products",
  data(){
    return {}
  },
  async asyncData({ $axios }){
    // Não tem acesso ao THIS!!!!!!!!!!!!!
    // await new Promise((resolve) => setTimeout(resolve, 2000));
    const products = await $axios.$get('https://jsonplaceholder.typicode.com/posts?_limit=3')
    console.log(products)
    return {
      products
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
