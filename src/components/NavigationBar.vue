<template>
  <nav class="navbar">
    <div class="logo-container"></div>
    <ul class="nav-list">
      <li class="nav-item" @click="navigateToRead">홈</li>
      <li class="nav-item" @click="goToRead">대처요령</li>
      <li class="nav-item" @click="goToAbout">문의</li>
      <li class="nav-item" @click="goToLogin">로그인</li>
      <!--<li class="nav-item" @click="goToSignUp">회원가입</li>-->
      <li class="nav-item" @click="goToInfo">자기소개</li>
      <a class="nav-item" href="https://www.donotcall.or.kr/main.jsp" target="_blank" rel="noopener noreferrer"
        style="text-decoration-line: none;">D.N.C.</a> <br>
    </ul>
  </nav>
</template>

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
  justify-content: center; /* 중앙 정렬 */
  align-items: center; /* 수직 정렬 */
}

.nav-item {
  float: left;
  margin: 0 12px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  position: relative;
}

.logo-container {
  width: 25px; /* 로고 이미지의 가로 크기 */
  height: 25px; /* 로고 이미지의 세로 크기 */
  margin-left: 10px; /* 여백 설정 */
  background-image: url("../img/callIcon.png"); /* 이미지 파일 경로 */
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  pointer-events: none; /* 마우스 이벤트 무시 */
  float: left;
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
    },
    goToLogin () {
      this.$router.push({ name: 'Login' })
    },
    goToSignUp () {
      this.$router.push({ name: 'SignUp' })
    },
    goToInfo () {
      this.$router.push({ name: 'Info' })
    }
  }
}
</script>
