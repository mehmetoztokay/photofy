<template>
  <nav class="navbar container">
    <router-link class="logo" to="/"><img src="@/assets/logo-photofy.svg" alt="photofy" /></router-link>
    <div class="nav-right" v-if="0>1">
      <router-link to="/profile" class="profile"><img src="@/assets/icon-user.svg" alt=""></router-link>
    </div>
   </nav>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 45px;
  position: absolute;
  margin: 0 auto;
  left: 50%;
  transform: translateX(-50%);
  top: 50px;
}
</style>

