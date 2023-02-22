<script>
import { RouterLink, RouterView } from 'vue-router'

const { VITE_API, VITE_URL} = import.meta.env

export default {
  data() {
    return{
      isLoading:false
    }
  },
  components: {
    RouterLink,
    RouterView 
  },
  mounted (){

    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false
    }, 1000);

    this.$http.get(`${VITE_URL}api/${VITE_API}/products/all`)
    .then(res=> {
      console.log(res.data)
    })
  }
};
</script>

<template>
  <div class="container">
    <header>
    <VueLoading v-model:active="isLoading"></VueLoading>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/products">Products</RouterLink> |
        <RouterLink to="/admin/products">後台產品頁面</RouterLink>
        <RouterLink to="/admin/orders">後台訂單頁面</RouterLink>
        
      </nav>
    </header>
    <RouterView />
</div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  margin-top: 2rem;
}

nav a {
  text-decoration: none!important;
}
nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
