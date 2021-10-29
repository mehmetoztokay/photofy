<template>
  <appHeader />
  <homeBanner/>
  <homeDesc/>
  <homeGallery/>
</template>

<script>
import homeBanner from "@/components/Home/Banner";
import homeDesc from "@/components/Home/Description";
import homeGallery from "@/components/Home/Gallery"
export default {
  components: {
    homeBanner,
    homeDesc,
    homeGallery
  },
};
</script>

<style></style>
