<template>
  <div id="app">
    <NavigationBar/>
    <div class="main-content">
      <router-view/>
    </div>
    <PageFooter/>
  </div>
</template>

<script>
import NavigationBar from '@/components/NavigationBar.vue'
import PageFooter from '@/components/PageFooter.vue'

export default {
  name: 'App',
  components: {
    NavigationBar,
    PageFooter
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 30px; /* 네비게이션 바의 높이만큼 패딩 추가 */
}

.main-content {
  padding-top: 0px;
  position: relative; /* 추가 */
}

.main-content::before,
.main-content::after {
  content: ''; /* 내용(content) 비우기 */
}

nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #4FC3A1;
  padding: 16px 0;
  z-index: 9999; /* 가장 큰 숫자를 지정하여 다른 요소보다 위에 그려지도록 설정 */
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
