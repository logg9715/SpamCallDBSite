<template>
  <div class="modal">
    <div class="modal-content">
      <div class="modal-header">
        <span class="close-icon" @click="cancel">&#10005;</span>
      </div>
      <h3>정보 수정</h3>
      <p>{{tags.join(', ')}}</p>
      <div class="update-container">
        <div class="update-input-wrapper">
          <input v-model="updatedNumber" class="update-input-field" placeholder="전화번호" readonly>
        </div>
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
        <br>
        <button @click="updateData" class="update-button">{{ '수정' }}</button>
        <button @click="cancel" class="cancel-button">{{ '취소' }}</button>
      </div>
    </div>
  </div>
</template>

<script>
import data from '../data'

export default {
  name: 'Update',
  props: ['contentId'],
  data () {
    return {
      contentData: data[this.contentId],
      updatedNumber: data[this.contentId].number,
      tags: data[this.contentId].tag
    }
  },
  methods: {
    updateData () {
      if (this.tags.length === 0) {
        alert('최소 1개 이상의 태그를 입력해야 합니다.')
        return
      }
      this.contentData.tag = this.tags
      this.$emit('closeModal')
      this.cancel()
    },
    cancel () {
      this.$emit('closeModal')
    }
  }
}
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.modal-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 4px;
  max-width: 340px;
}

.modal-header {
  display: flex;
  justify-content: flex-end;
}

.close-icon {
  font-size: 18px;
  cursor: pointer;
}

.update-container {
  text-align: center;
}

.update-input-wrapper {
  margin-bottom: 10px;
}

.update-input-field {
  width: 300px;
  border: 1px solid #bbb;
  border-radius: 8px;
  padding: 10px 12px;
  font-size: 14px;
}

.update-button {
  background-color: #4FC3A1;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.update-button:hover {
  background-color: #3D9C8B;
}

.update-button:active {
  background-color: #32787A;
}

.cancel-button {
  background-color: #BBB;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.cancel-button:hover {
  background-color: #999;
}

.cancel-button:active {
  background-color: #777;
}
</style>
