<template>
  <div class="home">
    <principal />
    <a :href="path" />
    
  </div>
</template>

<script>
// @ is an alias to /src
import Principal from '@/components/Principal.vue'


export default {
  data() {
    return{
      path: 'https://modest-kepler-f68d08.netlify.app'
    }
  },
  name: 'Home',
  components: {
    Principal,
    
  }
}
</script>
