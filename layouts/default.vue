<template>
  <div id="hold">
    <TheHeader/>
    <main class="main-content">
      <nuxt/>
    </main>
    <TheFooter/>
    <iframe
      src="https://www.linkedin.com/in/brendan-russo-161841128/"
      height="1"
      width="1"
      frameborder="0"
    ></iframe>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader/TheHeader";
import TheFooter from "@/components/TheFooter/TheFooter";

export default {
  components: {
    TheHeader,
    TheFooter
  },

  data() {
    return {
      infoShowing: true
    };
  }
};
</script>


<style lang="scss">
* {
  box-sizing: border-box;
}

body {
  height: 100vh;
  max-width: 100%;
  margin: 0;
  background: $bg-color;
  color: $text-color;
  overflow-x: hidden;
  width: 100vw;

  #__layout {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  #hold {
    width: 100%;
    padding: 20px 30px;

    iframe {
      width: 100%;
    }

    @media only screen and (min-width: 1300px) {
      padding: 20px calc((100vw - 1300px) / 2);

      iframe {
        width: 590px;
      }
    }

    @media only screen and (min-width: 768px) and (max-width: 1300px) {
      padding: 20px 30px;
      width: 100%;
    }
  }

  .main-content {
    width: 100%;
    margin-bottom: 100px;
  }
}

//Default button style

.button {
  box-shadow: 10px 10px 27px -8px rgba(255, 157, 5, 0.85);
  display: inline-block;
  padding: 0.5rem 2rem;
  background: $primary-brand;
  border-radius: 5px;
  color: $text-color;
  a {
    color: $text-color !important;

    &:hover {
      text-decoration: underline;
    }
    p {
      color: $text-color !important;
      margin: 0px !important;
    }
  }
}
</style>
