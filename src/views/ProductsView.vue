<template>
  <div class="container">
    Products List
  </div>
  <div>
    <table class="table">
      <tbody>
        <tr v-for="item in products" :key="item.id">
          <th class="tableHeader">{{ item.title }}</th>
          <td><img :src="item.imageUrl" width="300" alt=""></td>
          <td>
            <RouterLink :to="`/product/${item.id}`">
              連結到頁面
            </RouterLink>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

import { RouterLink, RouterView } from 'vue-router'

const { VITE_API, VITE_URL} = import.meta.env

export default {
  data() {
    return{
      products: []
    }
  },
  components: {
    RouterLink
  },
  mounted (){
    this.$http.get(`${VITE_URL}api/${VITE_API}/products/all`)
    .then(res=> {
      this.products = res.data.products;
    })
  }
};
</script>


<style scoped>
  .tableHeader {
    max-width: 150px; 
    word-break: break-all;
  }
</style>