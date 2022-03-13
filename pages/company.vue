<template>
  <div>
    <h1 class="text-lg font-bold">A empresa</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dolore
      vitae, saepe quibusdam voluptatibus aspernatur odit dolores? Iusto itaque
      reiciendis odit incidunt sed sit quaerat sequi, facilis obcaecati est
      earum.
    </p>
  </div>
</template>

<script>
export default {
  name: "company",
  data() {
    return {
      title: "",
    };
  },
  head() {
    return {
      title: "nuxt-project" + this.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Minha descrição da empresa",
        },
      ],
      bodyAttrs: {
        class: "bg-gray-400",
      },
    };
  },
  created() {
    this.getTitle();
  },
  methods: {
    getTitle() {
      setTimeout(() => {
        this.title = " | A empresa";
      }, 3000);
    },
  },
  // middleware: () => {
  //   console.log("middleware da empresa aqui")
  // }
};
</script>

<style lang="scss" scoped>
</style>
