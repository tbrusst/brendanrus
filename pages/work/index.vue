<template>
  <section id="content-work" class="content">
    <PostPreview
      v-for="post in posts"
      :key="post.id"
      :title="post.title"
      :image="post.image"
      :medium="post.medium"
      :id="post.id"
    ></PostPreview>
  </section>
</template>

<script>
import PostPreview from "@/components/Blog/PostPreview";

export default {
  components: {
    PostPreview
  },
  asyncData(context) {
    return context.app.$storyapi
      .get("cdn/stories", { version: "draft", starts_with: "work/" })
      .then(res => {
        console.log(res);
        return {
          posts: res.data.stories.map(bp => {
            return {
              id: bp.slug,
              title: bp.content.title,
              image: bp.content.image,
              medium: bp.content.medium
            };
          })
        };
      });
  }
};
</script>

<style scoped lang="scss">
#content-work {
  padding-bottom: 100px;
}

a {
  color: $text-color;
  &:hover {
    color: $text-color !important;
  }
}
h1 {
  margin: 0 0 20px 0;
  padding-top: 10px;
}
</style>
