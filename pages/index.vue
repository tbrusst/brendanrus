<template>
  <section>
    <div id="content-info">
      <h4>Creative Technologist</h4>
      <h1>BRENDAN RUSSO</h1>

      <div id="lower">
        <div id="image"></div>
        <div id="info-text">
          <p>
            I am currently working part-time as a UX Designer at a software startup called
            <a
              target="_blank"
              id="setvi"
              href="http://setvi.com/"
            >Setvi</a>
            . I studied Interactive Digital Media at Drexel University and am currently seeking full time opportunities in and around Philadelphia.
          </p>
          <p>My training and experience in digital media have allowed me to become well accomplished in UX/UI, motion design, and frontend development. As a Creative Technologist I am able to design beautifully functional products and then bring them to life in code.</p>
          <p>Please contact me with any questions you may have or with any information regarding opportunities in related fields.</p>
          <nuxt-link to="/work" tag="div" class="button" id="Work">
            <a>
              <p>View my work</p>
            </a>
          </nuxt-link>
        </div>
      </div>
    </div>

    <section id="content-work" class="content"></section>
  </section>
</template>

<script>
import PostPreview from "@/components/Blog/PostPreview";

export default {};
</script>

<style scoped lang="scss">
#content-info {
  h1 {
    margin: 0 0 15px 0;
    padding-top: 10px;
  }
  p {
    display: inline-block;
    margin: 0px 0 30px 0;
  }
}

a {
  p {
    font-weight: bold;
    color: $primary-brand;
    &:hover {
      text-decoration: underline;
    }
  }
}

#setvi {
  color: $primary-brand;
  &:hover {
    text-decoration: underline;
  }
}

#lower {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  @media only screen and (min-width: 768px) {
    height: 25rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
  }
  @media only screen and (min-width: 1280px) {
  }
  #info-text {
    width: 100%;
    @media only screen and (min-width: 768px) {
      width: 70%;
    }
    @media only screen and (min-width: 1280px) {
    }
  }
  #image {
    position: relative;
    height: 10rem;
    width: 100%;
    background: url("../assets/images/brendanrusso_portrait.jpeg");
    background-position: center;
    background-size: cover;
    margin: 0 0 30px 0;
    @media only screen and (min-width: 768px) {
      height: 25rem;
      width: 30%;
      margin: 0 30px 0 0;
    }
    @media only screen and (min-width: 1280px) {
    }
  }
}
</style>
