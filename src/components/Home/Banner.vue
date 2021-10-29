<template>
  <div class="home-banner">
    <InputBar/>
  </div>
</template>

<script>
import InputBar from "@/components/Home/InputBar"
export default {
  components:{
    InputBar,
  }
}
</script>

<style scoped>
.home-banner{
  width: 100%;
  height: 50rem;
  background-image: url('~@/assets/home-banner.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  z-index: -1;
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>