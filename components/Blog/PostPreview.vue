<template>
  <nuxt-link :to="id">
    <div id="postprev-wrap">
      <h4>{{id}}</h4>
      <div id="postprev-title">
        <h1 id="yolo" class="postPrev">{{ title }}</h1>
        <div id="postprev-image" :style="{backgroundImage: 'url(' + image + ')'}"></div>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    medium: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
#postprev-wrap {
  margin-bottom: 30px;
  &:hover {
    #postprev-image {
      &:before {
        transform: scaleX(0);
      }
    }
  }
}

#postprev-title {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  h1 {
    width: auto;
  }
  #postprev-image {
    position: relative;
    width: 100%;
    height: 2.5rem;
    background-size: cover;
    background-position: center;
    margin-left: 15px;

    @media only screen and (min-width: 768px) {
      height: 5rem;
    }
    @media only screen and (min-width: 1280px) {
      height: 6rem;
    }

    &:before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background: $bg-color;
      transform-origin: right;
      transition: transform 500ms cubic-bezier(0.77, 0, 0.175, 1);
    }
  }
  .postPrev {
    position: relative;
    &:after {
      content: "";
      position: absolute;
      width: 0;
      height: 0;
      border-bottom: 3rem solid $bg-color;
      border-right: 1rem solid transparent;
      z-index: 999;
      margin-left: 15px;
      @media only screen and (min-width: 768px) {
        border-bottom: 6rem solid $bg-color;
        border-right: 3rem solid transparent;
      }
      @media only screen and (min-width: 1280px) {
        border-bottom: 8rem solid $bg-color;
      }
    }
  }
  #image-mask {
    height: 100%;
    width: 30px;
    background: $bg-color;
    transform: skew(20deg);
  }
}

h4 {
  position: relative;
  z-index: 101;
  margin: 0 0 -0.25rem;
  @media only screen and (min-width: 768px) {
    margin: 0 0 -1.25rem 0;
  }
  @media only screen and (min-width: 1280px) {
    margin: 0 0 -2rem 0;
  }
}
</style>

