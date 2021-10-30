<template>
  <div class="container">
    <div class="gallery">
      <div v-for="(item, index) in photos" :key="item.id" class="item">
        <img :src="item.links.download" alt="photofy" />
        <div class="footer">
          <div class="author-info">
            <span>#{{ codes[index] }}-Resim</span>
            <span>{{ item.user.name }} | {{ item.created_at }}</span>
          </div>
          <div class="action">
            <a
              v-if="0 > 1"
              download
              :href="item.url"
              target="_blank"
              class="download"
              ><img src="@/assets/icon-download.svg" alt=""
            /></a>
            <span @click="likeAction(item)" class="like">
              <img v-if="item.liked" src="@/assets/icon-like.svg" alt="" />
              <img v-else src="@/assets/icon-liked.svg" alt="" />
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      photos: [],
      codes: [],
    };
  },
  methods: {
    likeAction(item) {
      if (item.liked) {
        item.liked = false;
      } else {
        item.liked = true;
      }
    },

    getRandom() {
      for (var i = 0; i < this.photos.length; i++) {
        this.codes.push(Math.floor(Math.random() * (9999 - 999)) + 1000);
      }
    },

    downImg(item) {
      console.log(`object`, item);
    },

    getPosts() {
      axios
        .get(
          "https://api.unsplash.com/photos/?count=30&?count=30&client_id=ybvQYUkE1OrPsSILaOI4eZhcEgNy8I11jK_8kaN_qZ0"
        )
        .then((response) => {
          this.photos = response.data;
          this.getRandom();
        })
        .catch((error) => {
          this.errors.push(error);
        });
    },
  },

  created() {
    this.getPosts();
  },
};
</script>

<style scoped>
.gallery {
  width: 100%;
  overflow: hidden;
  margin-top: 4rem;
  columns: 3;
  column-gap: 20px;
}

.gallery .item {
  height: auto;
  margin-bottom: 1.5rem;
  break-inside: avoid;
  position: relative;
}

.gallery .item img {
  width: 100%;
  height: auto;
  object-fit: cover;
  min-height: 20rem;
  display: block;
}

.gallery .item:hover .footer {
  visibility: visible;
  opacity: 1;
}

.gallery .item .footer {
  background: rgb(0, 0, 0);
  background: linear-gradient(0deg, rgb(0 0 0) 0%, rgb(0 0 0 / 0%) 100%);
  position: absolute;
  bottom: 0;
  width: 100%;
  min-height: 70px;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  transition: opacity 0.5s linear;
  visibility: hidden;
  opacity: 0;
  align-items: center;
}

.gallery .item .footer .author-info {
  display: flex;
  flex-direction: column;
  color: #fff;
}

.gallery .item .footer .author-info .download {
  font-weight: 500;
  font-size: 16px;
}
.gallery .item .footer .author-info .like {
  font-weight: 200;
  font-size: 14px;
}

.gallery .item .footer .action {
  display: flex;
  align-items: center;
}

.gallery .item .footer .action .download,
.gallery .item .footer .action .like {
  padding: 5px;
  display: block;
  margin-left: 13px;
  cursor: pointer;
}

.gallery .item .footer .action .download img,
.gallery .item .footer .action .like img {
  min-height: unset;
  height: 20px;
  width: auto;
}

@media screen and (max-width: 1280px) {
  .gallery {
    columns: 2;
    column-gap: 10px;
  }

  .gallery .item {
    margin-bottom: 10px;
  }
}

@media screen and (max-width: 640px) {
  .gallery {
    columns: 1;
    column-gap: 10px;
  }
}
</style>
