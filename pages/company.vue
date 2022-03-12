<template>
  <div>
    <h1 class="text-lg font-bold">A empresa</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dolore vitae, saepe quibusdam voluptatibus aspernatur odit dolores? Iusto itaque reiciendis odit incidunt sed sit quaerat sequi, facilis obcaecati est earum.</p>
  </div>
</template>

<script>
  export default {
    name: 'company',
    middleware: 'auth'
    // middleware: () => {
    //   console.log("middleware da empresa aqui")
    // }
  }
</script>

<style lang="scss" scoped>

</style>
