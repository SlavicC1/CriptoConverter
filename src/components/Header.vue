<template>
  <div class="header">
    <a v-for="ref in pageRefs"
      v-bind:key="ref.ref"
      v-bind:href="ref.ref"
      v-bind:class="nowIsOnPage == ref.ref ? 'activeLink' : ''">{{ ref.text }}</a>
  </div>
</template>


<script>
export default {
  name: 'main-header',
  props: ['pageRefs', 'nowIsOnPage'],
}
</script>


<style scoped>
.header {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 80px;
    border-bottom: 2px solid black;
}

a {
    margin: 0 20px;
    font-size: 24px;
    cursor: pointer;
    color: black;
}

a:hover {
    text-decoration: underline;
    transform: scale(1.1);
}

a:visited {
    color: black;
}

a.activeLink {
  color: #2a2;
  transform: scale(1);
}

</style>
