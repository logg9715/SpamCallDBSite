<template>
    <nav class="navbar">
      <ul class="nav-list">
        <li class="nav-item" @click="navigateToRead">홈</li>
        <li class="nav-item" @click="goToRead">대처요령</li>
        <li class="nav-item" @click="goToAbout">문의</li>
        <a  class="nav-item" href="https://www.donotcall.or.kr/main.jsp" target="_blank" rel="noopener noreferrer" style="text-decoration-line: none;">Do Not Call (두낫콜)</a> <br>
      </ul>
    </nav>
  </template>

<script>
export default {
  methods: {
    navigateToRead () {
      this.$router.push({ name: 'Read' })
    },
    goToRead () {
      this.$router.push({ name: 'Read', hash: '.button-wrapper' })
    },
    goToAbout () {
      this.$router.push({ name: 'Read', hash: '#about' })
    }
  }
}
</script>

  <style scoped>
  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #324960;
    padding: 16px 0;
    margin: 0;
  }

  .nav-list {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
  }

  .nav-item {
    margin: 0 12px;
    color: white;
    font-weight: bold;
    cursor: pointer;
    position: relative;
  }

  .nav-item::before {
    content: "";
    position: absolute;
    top: -15px;
    left: -6px;
    right: -6px;
    bottom: -15px;
    background-color: #324960;
    z-index: -1;
    transition: opacity 0.3s ease;
  }

  .nav-item:hover::before {
    background-color: #343434;
    opacity: 0.7;
    top: -20px;
    bottom: -16px;
    left: -11px;
    right: -11px;
  }
  </style>
