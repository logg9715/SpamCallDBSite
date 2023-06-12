<template>
    <div>
        <br /><br />
        <div class="signin-container">
            <h1>회원가입</h1>
            <div class="input-group">
                <label for="username">아이디</label>
                <input type="text" id="username" v-model="username" placeholder="아이디를 입력하세요" />
            </div>
            <div class="input-group">
                <label for="password">비밀번호</label>
                <input type="password" id="password" v-model="password" placeholder="비밀번호를 입력하세요" />
            </div>
            <div class="input-group">
                <label for="confirmPassword">비밀번호 확인</label>
                <input type="password" id="confirmPassword" v-model="confirmPassword" placeholder="비밀번호를 다시 입력하세요" />
            </div>
            <br />
            <button @click="signUp">회원가입</button>
            <button class="goBackButton" @click="goBack">취소</button>
        </div>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </div>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      password: '',
      confirmPassword: ''
    }
  },
  methods: {
    signUp () {
      // 회원가입 처리
      // API 호출 등 필요한 로직 작성
    },
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
.signin-container {
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

button:hover {
    background-color: #2b3c4f;
}

button:active {
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
