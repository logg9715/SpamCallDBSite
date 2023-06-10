<template>
  <div>
    <div class="modal-header">
      <span class="close-icon" @click="cancel">&#10005;</span>
    </div>
    <div class="modal-content">
      <input v-model="number" @change="checkNumber" class="input-field" placeholder="새 스팸번호 입력">
      <br>
      <div class="checkbox-container">
        <label class="checkbox-label">
          <input type="checkbox" v-model="tags" value="인터넷가입"> 인터넷가입
        </label>
        <label class="checkbox-label">
          <input type="checkbox" v-model="tags" value="보험가입"> 보험가입
        </label>
        <label class="checkbox-label">
          <input type="checkbox" v-model="tags" value="문자스팸"> 문자스팸
        </label>
        <label class="checkbox-label">
          <input type="checkbox" v-model="tags" value="보이스피싱"> 보이스피싱
        </label>
        <label class="checkbox-label">
          <input type="checkbox" v-model="tags" value="기타"> 기타
        </label>
      </div>
    </div>
    <div class="modal-buttons">
      <button class="theme-button" @click="submit">작성</button>
      <button class="theme-button cancel-button" @click="cancel">취소</button>
    </div>
  </div>
</template>

<style>
.input-field {
  width: 200px;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
}

.checkbox-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 10px;
}

.checkbox-label {
  margin-bottom: 8px;
  font-size: 14px;
  color: #555;
}

.theme-button {
  padding: 10px 20px;
  font-size: 14px;
  background-color: #4FC3A1;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.theme-button:hover {
  background-color: #45A392;
}

.modal-header {
  display: flex;
  justify-content: flex-end;
}

.close-icon {
  font-size: 18px;
  cursor: pointer;
}

.modal-content {
  padding: 10px;
}

.modal-buttons {
  text-align: right;
  margin-top: 20px;
}

.cancel-button {
  margin-left: 10px;
  background-color: #BBB;
}

.cancel-button:hover {
  background-color: #999;
}
</style>

<script>
import data from '@/data'

export default {
  name: 'NewCreate',
  data () {
    return {
      data: data,
      number: '',
      tags: []
    }
  },
  methods: {
    write () {
      const currentDate = new Date().toISOString().split('T')[0]
      if (this.number === '') {
        alert('전화번호를 입력하세요.')
        return
      }
      if (this.data.some(item => item.number === this.number)) {
        alert('이미 존재하는 전화번호입니다!')
        return
      }
      if (this.tags.length === 0) {
        alert('최소 1개 이상의 태그를 입력해야 합니다.')
        return
      }
      // const tagString = this.tags.join(', ')
      this.data.unshift({
        number: this.number,
        searched: 1, // 최초 생성 시 1로 저장
        tag: this.tags,
        date: currentDate // 현재 날짜 저장
      })
      this.$router.push({
        path: '/'
      })
      this.cancel()
    },
    submit () {
      // 데이터 유효성 검사 및 등록 처리
      this.write()
    },
    cancel () {
      this.$emit('cancel')
    },
    checkNumber () {
      const parsedNumber = parseInt(this.number)
      if (isNaN(parsedNumber) || parsedNumber.toString() !== this.number) {
        alert('숫자만 입력하세요!\n( - 과 같은 특수문자는 생략합니다)')
        this.number = ''
      }
    }
  }
}
</script>
