<template>
  <div class="detail-main">
    <div class="detail-info">
      <div class="detail-field" style="padding-left: 80px;">
        <h1>상세 정보</h1>
      </div>
      <div class="table-container">
        <table class="detail-table">
          <tr>
            <td class="table-header">번호</td>
            <td>{{ contentData.number }}</td>
          </tr>
          <tr>
            <td class="table-header">종류</td>
            <td>{{ contentData.tag.join(', ') }}</td>
          </tr>
          <tr>
            <td class="table-header">최초 등록일</td>
            <td>{{ contentData.date }}</td>
          </tr>
          <tr>
            <td class="table-header">신고된 횟수</td>
            <td>{{ contentData.searched }}</td>
          </tr>
          <tr>
            <td class="table-header">위험도</td>
            <td>
              <span v-if="contentData.searched <= 3"><p style="font-weight: bold; color: black;">(없음)</p>현재의 데이터로는 판단할 수 없습니다.</span>
              <span v-else-if="contentData.searched >= 20"><p style="font-weight: bold; color: red;">(위험)</p>매우 많은 신고가 들어온 번호입니다. 주의하세요.</span>
              <span v-else ><p style="font-weight: bold; color: darkorange;">(보통)</p>주의를 기울일 필요가 있는 번호입니다.</span>
              <br><br>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="detail-buttons">
      <button @click="openModal('Update')" class="detail-button">수정</button>
      <!--<button @click="deleteContent" class="detail-button">삭제</button> -->
      <button @click="goBack" class="detail-button">뒤로</button>
    </div>

    <!-- Modal for Update -->
    <div v-if="isUpdateModalOpen" class="modal">
      <div class="modal-content">
        <Update :contentId="contentIndex" @closeModal="closeModal" />
      </div>
    </div>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
  </div>
</template>

<script>
import data from '../data'
import Update from './Update'

export default {
  name: 'Detail',
  components: {
    Update
  },
  data () {
    const contentIndex = this.$route.params.contentId
    return {
      contentData: data[contentIndex],
      contentIndex: contentIndex,
      isUpdateModalOpen: false
    }
  },
  methods: {
    deleteContent () {
      data.splice(this.contentIndex, 1)
      this.$router.push({
        path: '/'
      })
    },
    openModal (modalName) {
      if (modalName === 'Update') {
        this.isUpdateModalOpen = true
      }
    },
    goBack () {
      this.$router.push({ name: 'Read' })
    },
    closeModal () {
      this.isUpdateModalOpen = false
    }
  }
}
</script>

<style scoped>
.detail-main {
  max-width: 1000px;
  margin: 0 auto;
}
.detail-info {
  margin-bottom: 20px;
  text-align: left;
}

.detail-field {
  font-size: 18px;
  margin-bottom: 10px;
}

.detail-buttons {
  display: flex;
  justify-content: flex-end;
  margin: 0 60px;
}

.detail-button {
  background-color: #4FC3A1;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 14px;
  margin-left: 10px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.detail-button:hover {
  background-color: #3D9C8B;
}

.detail-button:active {
  background-color: #32787A;
}

.table-container {
  overflow-x: auto;
  margin-left: 50px;
  margin-right: 50px;
}

.detail-table {
  width: calc(100% - 100px); /* 좌우 여백을 50px씩 제외한 너비 */
  border-collapse: collapse;
  table-layout: fixed;
}

.detail-table td {
  padding: 10px;
  border: 1px solid #ddd;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.detail-table .table-header {
  font-weight: bold;
  background-color: #f9f9f9;
}

/* Modal Styles */
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
}

.modal-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 4px;
}
</style>
