<template>
  <appHeader />
  <homeBanner />
  <homeDesc />
  <homeGallery :filteredPhotos="filteredPhotos" :cocktail="cocktail" />
</template>

<script>
import homeBanner from "@/components/Home/Banner";
import homeDesc from "@/components/Home/Description";
import homeGallery from "@/components/Home/Gallery";
import axios from "axios";

export default {
  components: {
    homeBanner,
    homeDesc,
    homeGallery,
  },
  data() {
    return {
      photos: [],
      cocktail: [],
      filteredPhotos: [],
    };
  },
  methods: {
    // likeAction(item) {
    //   if (item.liked) {
    //     item.liked = false;
    //   } else {
    //     item.liked = true;
    //   }
    // },

    getRandom() {
      for (var i = 0; i < this.photos.length; i++) {
        let randomN = Math.floor(Math.random() * (9999 - 999)) + 1000;
        this.photos[i].codes = randomN;
      }
    },

    getPosts() {
      axios
        .get(
          "https://api.unsplash.com/photos/random/?count=30&?count=30&client_id=84rZrSB7nj6P7THhL9ggr4C09ssevCjJy2sR3WyXw0A"
          // "https://api.unsplash.com/photos/random/?count=30&?count=30&client_id=ybvQYUkE1OrPsSILaOI4eZhcEgNy8I11jK_8kaN_qZ0" //yedek
        )
        .then((response) => {
          this.photos = response.data || [];
          this.filteredPhotos = this.photos;
          this.getRandom();
        })
        .catch((error) => {
          this.errors.push(error);
        });
    },

    getData() {
      const options = {
        method: "GET",
        url: "https://the-cocktail-db.p.rapidapi.com/filter.php",
        params: { i: "Gin" },
        headers: {
          "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
          "x-rapidapi-key":
            "991e0480b0mshcfc381bad7e386ap176dadjsn616a61186802",
        },
      };

      axios
        .request(options)
        .then((response) => {
          this.cocktail = response.data.drinks.splice(1, 30) || [];
        })
        .catch(function (error) {
          console.error(error);
        });
    },
    getFilterGallery(data) {
      if (data == "" || data == null) {
        this.filteredPhotos = this.photos.filter((p) => p.codes != "");
      } else {
        this.filteredPhotos = this.photos.filter((p) => p.codes == data);
      }
    },
  },

  provide() {
    return {
      getFilterGalleryData: this.getFilterGallery,
    };
  },

  created() {
    this.getPosts();
    this.getData();
  },
};
</script>

<style></style>
