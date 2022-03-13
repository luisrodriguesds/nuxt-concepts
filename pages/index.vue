<template>
  <div>
    <pre>
      {{$config}}
    </pre>
    <br>
    <br>
    <pre>
      {{$store.state.user}}
    </pre>

    <pre>
      {{user}}
    </pre>

    <VTooltip>
      <a>Sponsor me</a>

      <template #popper>
        Help me fund my Open Source work!
      </template>
    </VTooltip>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: 'IndexPage',
  asyncData({$config}){
    console.log($config.facebook_api_key)
  },
  created () {
    console.log(this.$config.facebook_api_key)
  },
  mounted(){
    console.log(this.$name, 'plugin')
  },
  computed: {
    ...mapState({
      user: state => state.user
    })
  },
}
</script>
