<template>
  <footer class="footer">
    <div class="container">
      <router-link to="/"
        ><img src="@/assets/logo-photofy.svg" alt="photofy"
      /></router-link>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  background-color: #000000;
  margin-top: 4rem;
}

.footer .container {
  min-height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.footer img {
}
</style>
