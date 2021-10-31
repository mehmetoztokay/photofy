<template>
  <appHeader />
  <homeBanner @searchData="searchData($event)" />
  <homeDesc />
  <homeGallery :searchDataCome="searchDataCome" />
</template>

<script>
import homeBanner from "@/components/Home/Banner";
import homeDesc from "@/components/Home/Description";
import homeGallery from "@/components/Home/Gallery";
export default {
  components: {
    homeBanner,
    homeDesc,
    homeGallery,
  },
  data() {
    return {
      searchDataCome: null,
    };
  },
  methods: {
    searchData($event) {
      this.searchDataCome = $event || null;
    },
  },
};
</script>

<style></style>
