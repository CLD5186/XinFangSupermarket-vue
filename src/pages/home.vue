<template>
  <LdContainer>
    <transition name="slide-fade">
      <router-view></router-view>
    </transition>
  </LdContainer>
</template>

<script>
import LdContainer from "../components/ld-container";

export default {
  components: {
    LdContainer
  }
};
</script>
