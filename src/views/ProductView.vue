<template>
  <VueLoading v-model:active="isLoading"></VueLoading>
  <div class="container">
    單一產品頁面
  </div>
  <div>
    {{ product }}
    <hr>
    <table class="table">
      <tbody>
        <tr>
          <td>{{ product.title }}</td>
          <td>{{ product.description }}</td>
          <td>{{ product.price }}</td>
          <td><img style="width: 250px;" :src="product.imageUrl" alt=""></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  // 環境變數
  const { VITE_API, VITE_URL} = import.meta.env

  export default {
    data() {
      return{
        isLoading:false,
        product: {}
      }
    },
    mounted() {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false
        this.$http.get(`${VITE_URL}api/${VITE_API}/product/${id}`)
        .then(res=> {
          this.product = res.data.product;
        })
      }, 1000);

      // 取得product id 
      console.log('$route',this.$route);
      console.log('$router',this.$router);

      const { id } = this.$route.params;
      // this.$router.push('/');

      // this.$http.get(`${VITE_URL}api/${VITE_API}/product/${id}`)
      // .then(res=> {
      //   this.product = res.data.product;
      // })
    }
  }
</script>