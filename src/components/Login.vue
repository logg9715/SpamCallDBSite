<template>
    <div>
        <br /><br />
        <div class="login-container">
            <h1>소셜 로그인</h1>
            <div class="input-group">
                <label for="username">아이디</label>
                <input type="text" id="username" v-model="username" placeholder="아이디를 입력하세요" />
            </div>
            <div class="input-group">
                <label for="password">비밀번호</label>
                <input type="password" id="password" v-model="password" placeholder="비밀번호를 입력하세요" />
            </div>
            <button class="signup-button" @click="login">로그인</button>
            <button class="goBackButton" @click="goBack">이전</button>
            <br>
            <!-- 회원가입 버튼 추가 -->
            <hr>
            <br>
            <label for="username">아직 회원이 아니신가요?</label>
            <button class="signup-button" @click="goToSignUp">회원가입</button>
            <br>
            <hr>
            <br>
            <label for="username">소셜 로그인</label>
            <br>
            <button class="kakao" @click="loginWithKakao">
                카카오 로그인
            </button>
            <button class="naver" @click="loginWithNaver">
                네이버 로그인
            </button>
            <button class="google" @click="loginWithGoogle">
                구글 로그인
            </button>
            <button class="apple" @click="loginWithApple">
                애플 로그인
            </button>
            <button class="github" @click="loginWithGithub">
                깃헙 로그인
            </button>
        </div>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </div>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    loginWithKakao () {
      // 카카오 로그인 처리
      // API 호출 등 필요한 로직 작성
    },
    loginWithNaver () {
      // 네이버 로그인 처리
      // API 호출 등 필요한 로직 작성
    },
    loginWithGoogle () {
      // 구글 로그인 처리
      // API 호출 등 필요한 로직 작성
    },
    loginWithApple () {
      // 애플 로그인 처리
      // API 호출 등 필요한 로직 작성
    },
    loginWithGithub () {
      // 깃헙 로그인 처리
      // API 호출 등 필요한 로직 작성
    },
    goToSignUp () {
      this.$router.push({ name: 'SignUp' })
    },
    goBack () {
      this.$router.go(-1)
    },
    login () {
      if (this.username === 'admin' && this.password === '1234') {
        alert('로그인됨')
      } else {
        alert('올바르지 않습니다.')
      }
    }
  }
}
</script>

<style scoped>
.login-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 40px;
    background-color: #f7f7f7;
    border: 1px solid #eaeaea;
    border-radius: 4px;
}

h1 {
    text-align: center;
}

.input-group {
    margin-bottom: 20px;
}

label {
    display: block;
    margin-bottom: 6px;
    font-weight: bold;
}

input {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

button {
    display: block;
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    font-size: 16px;
    background-color: #324960;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button.kakao:hover {
    background-color: #f9d100;
}

button.naver:hover {
    background-color: #00bd00;
}

button.google:hover {
    background-color: #cc3030;
}

button.apple:hover {
    background-color: #808080;
}

button.github:hover {
    background-color: rgb(61, 60, 60);
}

button:active {
    background-color: #1f2a38;
}

.kakao {
    background-color: #ffe812;
    color: #000;
}

.naver {
    background-color: #1ec800;
    color: #fff;
}

.google {
    background-color: rgb(247, 52, 52);
    color: rgb(230, 230, 230);
}

.apple {
    background-color: #8e8e93;
    color: #fff;
}

.github {
    background-color: #000;
    color: #fff;
}

.social-icon {
    width: 24px;
    height: 24px;
    margin-right: 8px;
    vertical-align: middle;
}

.signup-button {
    display: block;
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    font-size: 16px;
    background-color: #324960;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.signup-button:hover {
    background-color: #2b3c4f;
}

.signup-button:active {
    background-color: #1f2a38;
}

.goBackButton {
    background-color: #acabab;
    /* 회색 계열 색상 코드 */
    color: #ffffff;
    /* 흰색 텍스트 색상 */
}

.goBackButton:hover {
    background-color: #888787;
    /* 마우스 오버 시 색상 변화 */
}

.goBackButton:active {
    background-color: #666666;
    /* 클릭 시 색상 변화 */
}</style>
