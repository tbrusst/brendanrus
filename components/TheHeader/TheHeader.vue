<template>
  <div class="nav">
    <nuxt-link v-if="$route.path === '/work'" to="/work" tag="div" class="nav-item" id="Back">
      <a>
        <p></p>
      </a>
    </nuxt-link>
    <nuxt-link v-else-if="$route.path === '/'" to="/work" tag="div" class="nav-item" id="Back">
      <a>
        <p></p>
      </a>
    </nuxt-link>
    <nuxt-link v-else to="/work" tag="div" class="nav-item" id="Back">
      <a>
        <p>Back</p>
      </a>
    </nuxt-link>

    <div id="main-nav">
      <nuxt-link to="/" tag="div" class="nav-item" id="Info">
        <a>
          <p>Info</p>
        </a>
      </nuxt-link>
      <nuxt-link to="/work" tag="div" class="nav-item" id="Work">
        <a>
          <p>Work</p>
        </a>
      </nuxt-link>
    </div>
  </div>
</template>



<script>
export default {
  data() {
    return {
      infoShowing: true
    };
  }
  // methods: {
  //     toggleShow() {
  //     this.infoShowing = !this.infoShowing;
  //     }
  // },
};
</script>




<style lang="scss" scoped>
.nav {
  opacity: 0;
  animation: fadeIn 1000ms cubic-bezier(0.215, 0.61, 0.355, 1) 2s 1 forwards;
  a {
    color: $text-color;
  }
}

.nav-item {
  position: relative;
  &:after {
    content: "";
    position: absolute;
    width: 0%;
    height: 2px;
    background: $primary-brand;
    transition: 150ms ease-in-out;
  }
  &:hover {
    &:after {
      width: 50%;
    }
  }
}

#main-nav {
  .nuxt-link-exact-active {
    &:after {
      content: "";
      position: absolute;
      width: 10px;
      height: 2px;
      background: $primary-brand;
    }
    a {
      p {
        color: $primary-brand;
      }
    }
  }
}

#Back {
  .nuxt-link-exact-active {
    &:after {
      content: "";
      position: absolute;
      width: 0px;
      height: 0px;
      background: black;
    }
    a {
      p {
        color: $primary-brand;
      }
    }
  }
}

#main-nav {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  .nav-item {
    margin-left: 20px;
  }
}

.nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 20px 0;
  .nav-item {
    line-height: 1.5rem;
  }
}
</style>

