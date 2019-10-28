<template>
  <div class="footer">
    <div class="left">
      <!-- <a target="_blank" href="https://www.instagram.com/brendanr.us/">
        <svg style="width:24px;height:24px" viewBox="0 0 24 24">
          <path
            fill="#df9e01"
            d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"
          ></path>
        </svg>
      </a>-->

      <a href="mailto:russobrendanm@gmail.com">
        <div>
          <p>Contact</p>
        </div>
      </a>
    </div>

    <div class="right">
      <p>
        <span>Brendan Russo</span> ― 2019
      </p>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
.footer {
  &:before {
    transform: scaleX(0);
    animation: barIn 1000ms cubic-bezier(0.645, 0.045, 0.355, 1) 2.5s 1 forwards;

    transform-origin: left;
  }
}

.right {
  p {
    opacity: 0;
    animation: fadeIn 1000ms cubic-bezier(0.215, 0.61, 0.355, 1) 4s 1 forwards;
  }
  &:after {
    transform: scaleY(0);
    animation: barUpIn 1000ms cubic-bezier(0.645, 0.045, 0.355, 1) 2.5s 1
      forwards;

    transform-origin: bottom;
  }
}

.left {
  opacity: 0;
  animation: fadeIn 1000ms cubic-bezier(0.215, 0.61, 0.355, 1) 3.75s 1 forwards;
}

a {
  p {
    color: $primary-brand;
  }
  color: $primary-brand;
  &:hover {
    text-decoration: underline;
  }
}
.footer {
  &:before {
    content: "";
    height: 1px;
    width: 100%;
    background-color: $text-color;
    position: absolute;
    top: 0;
    left: 0;
  }
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  padding: 20px 30px;
  background: $bg-color;
  .left {
    display: flex;
    flex-direction: row;

    a {
      margin: 0 20px 0 0;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .right {
    display: none;
    @media only screen and (min-width: 768px) {
      display: flex;
      flex-direction: row;
      height: 100%;
      &:after {
        content: "";
        position: absolute;
        background-color: $text-color;
        height: 100%;
        width: 1px;
        top: 0;
      }
      p {
        padding-left: 20px;
      }
    }
  }

  @media only screen and (min-width: 1300px) {
    left: 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px calc((100vw - 1300px) / 2);
  }

  @media only screen and (min-width: 768px) and (max-width: 1300px) {
    left: 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px 30px;
  }
}
</style>

