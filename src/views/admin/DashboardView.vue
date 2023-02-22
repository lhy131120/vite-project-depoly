<template>
  <div>
    這是後台頁面
    <hr>
    <!-- 這個是後台的list巢狀route -->
    <RouterView></RouterView>
  </div>
</template>

<script>
  import { RouterView } from 'vue-router'
  export default {
    components: {
      RouterView,
    }
  }
</script>