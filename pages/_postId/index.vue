<template>
  <div id="post">
    <section class="post-content">
      <h1>{{ title }}</h1>
      <div id="content" v-html="content"></div>
    </section>
  </div>
</template>

<script>
import marked from "marked";

export default {
  asyncData(context) {
    return context.app.$storyapi
      .get("cdn/stories/work/" + context.params.postId, {
        version: "draft"
      })
      .then(res => {
        console.log(res.content);
        return {
          title: res.data.story.content.title,
          content: marked(res.data.story.content.content)
        };
      });
  }
};
</script>

<style lang="scss">
#content {
  img {
    width: 100%;
    margin: 15px 0;
    @media only screen and (min-width: 768px) {
      width: 49.5%;
      margin: 15px 0;
    }
    @media only screen and (min-width: 1280px) {
      width: 49.5%;
    }
  }
}

.button {
  margin-bottom: 30px;
  @media only screen and (min-width: 768px) {
    margin-bottom: 50px;
  }
}

.post-content {
  margin-bottom: 100px;

  div {
    img {
      width: 50%;
      position: relative;
    }

    p {
      line-height: 1.7rem;
      margin: 0 0 20px 0;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      @media only screen and (min-width: 768px) {
        line-height: 2rem;
      }
    }
  }
  h1 {
    margin: 0 0 10px 0;
    padding-top: 10px;
    @media only screen and (min-width: 768px) {
      margin: 0 0 0 0;
    }
  }
  h2 {
    margin: 30px 0 15px 0;
    @media only screen and (min-width: 768px) {
      margin: 50px 0 15px 0;
    }
  }
  a {
    color: $primary-brand;
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
