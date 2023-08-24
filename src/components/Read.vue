<template>
  <div class="Read-main">
    <h1 class="homeFlag" id="homeFlag">스팸 전화전호 데이터베이스</h1>

    <div class="table-wrapper">
      <h3 style="text-align: left;">모르는 번호로부터 전화가 오면 '스팸 조회'</h3>
      <p style="text-align: left;">사용자가 만들어가는 '스팸 전화번호 데이터베이스'에서 스팸 여부를 조회하세요. 다수 사용자의 조회 빈도에 기반해 스팸 여부를 판별해 알려줍니다. 지역번호를
        포함하여 전화번호를 입력하면 일치하는 번호를 표시해줍니다.</p>
      <div class="search">
        <input v-model="searchNum" class="searchInput" type="text" placeholder="전화번호 입력" @keyup.enter="searchData">
        <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/icon/search.png" @click="searchData">
      </div>
      <hr>
      <h3 style="text-align: left;">등록된 스팸 번호</h3>
      <p style="text-align: left;">최근 사용자들이 등록한 스팸 번호입니다. 한 번에 최대 10개까지 표시합니다.</p> <br>
      <table class="fl-table">
        <thead>
          <tr>
            <th style="width: 10%;">전화번호</th>
            <th style="width: 8%;">제보된 횟수</th>
            <th style="width: 14%;">종류</th>
            <th style="width: 8%;">등록된 날짜</th>
          </tr>
        </thead>
        <template v-if="filteredData.length > 0">
          <tbody>
            <tr :key="index" v-for="(value, index) in filteredData" v-on:click="detail(index)">
              <td>{{ value.number }}</td>
              <td>{{ value.searched }}</td>
              <td>{{ value.tag.join(', ') }}</td>
              <td>{{ value.date }}</td>
            </tr>
          </tbody>
        </template>
        <template v-else>
          <tbody>
            <tr>
              <td colspan="4" class="no-matching">일치하는 정보가 존재하지 않습니다.</td>
            </tr>
          </tbody>
        </template>
      </table>
      <!-- '스팸 번호인가요?' 버튼 표시 -->
      <template v-if="filteredData.length === 1">
        <br>
        <div v-if="showButton">
          <span class="searched-number">{{ filteredData[0].number }}는 스팸 번호인가요?</span>
          <button class="spam-button" @click="checkSpam">그렇습니다</button>
        </div>
        <div v-else>
          <span>제보해 주셔서 감사합니다.</span>
        </div>
        <br>
      </template>
      <br>
      <div class="button-wrapper" id="button-wrapper">
        <span class="text">찾는 번호가 없나요?</span>
        <button class="theme-button" @click="openModal">새로 등록</button>
        <!-- 모달 -->
        <Modal v-if="showModal" @close="closeModal">
          <NewCreate @submit="handleNewCreateSubmit" @cancel="closeModal" />
        </Modal>
      </div>
      <hr>
      <h2 class="helper" id="helper" style="text-align: left;">스팸 전화/문자 수신 시 올바른 대처방안</h2>
      <div style="text-align: left; line-height: 150%;">
        <h3>1. 차단 기능 이용하기</h3>
        스마트폰은 대부분 발신자 차단 기능을 제공하고 있습니다. <br>
        <ul>
          <li>아이폰의 경우</li>
          <ul>
            <li>문자 메시지에서 상단의 연락처 선택</li>
            <li>정보를 클릭</li>
            <li>이 발신자 차단</li>
          </ul>
          <br>
          <li>안드로이드의 경우</li>
          <ul>
            <li>문자 메시지 연락처 선택</li>
            <li>휴지통 클릭</li>
            <li>이 발신자 차단</li>
          </ul>
        </ul>
        <br>
        <h3>2. 문자 메시지 내용에 포함된 전화번호가 대표번호인지 확인하기</h3>
        문자 내의 전화번호 직접 연결 금지. <br>
        해당 업체 대표번호로 전화 문의 <br><br><br>
        <h3>3. 문자 메시지를 통해 출처가 불명확한 어플리케이션을 설치하지 않기</h3>
        문자 내 링크로 어플 설치 금지<br>
        공식적인 경로(구글 플레이 스토어, 앱스토어 등)를 통한 어플 다운
        <br><br><br>
        <h3>5. 스팸 차단 서비스 활용하기</h3>
        <a href="http://www.tworld.co.kr/normal.do?serviceId=S_PROD2001&viewId=V_PROD7070&prod_id=NA00002121&uCode=u1_2" target="_blank" rel="noopener noreferrer">SKT 스팸 필터링 서비스 안내</a> <br>
        <a href="https://spamfilter.mobile.kt.com/spam_01_new.do" target="_blank" rel="noopener noreferrer">KT 스팸차단 서비스 안내</a> <br>
        <a href="https://www.lguplus.com/plan/addon/addon-call-msg/LRZ0000277" target="_blank" rel="noopener noreferrer">LG U+ 스팸차단 서비스 안내</a> <br>
      </div> <br><br><br><br id="about">
    </div>
  </div>
</template>

<script>
import Modal from '@/components/Modal.vue'
import NewCreate from '@/components/NewCreate.vue'
import data from '../data'
export default {
  name: 'Read',
  data () {
    return {
      data: data,
      searchNum: '',
      showButton: true,
      showModal: false
    }
  },
  computed: {
    filteredData () {
      if (this.searchNum === '') {
        return this.data.slice(0, 10) // 최대 10개의 행만 반환
      }
      const searchTerm = this.searchNum.toLowerCase()
      const filteredData = this.data.filter((item) => {
        return item.number.toLowerCase().includes(searchTerm)
      })
      return filteredData.slice(0, 10) // 최대 10개의 행만 반환
    }
  },
  methods: {
    write () {
      this.$router.push({
        path: 'NewCreate'
      })
    },
    detail (index) {
      if (index >= 0 && index < this.filteredData.length) {
        const dataIndex = this.data.indexOf(this.filteredData[index])
        this.$router.push({
          path: '/detail/' + dataIndex
        })
      } else {
        console.error('잘못된 인덱스입니다.')
      }
    },
    searchData () {
      if (this.searchNum === '') {
        alert('전화번호를 입력하세요.')
      } else {
        const searchTerm = this.searchNum.toLowerCase()
        const filteredData = this.data.filter((item) => {
          return item.number.toLowerCase().includes(searchTerm)
        })
        if (filteredData.length === 0) {
          alert('일치하는 정보가 존재하지 않습니다.')
        }
      }
    },
    checkSpam () {
      if (this.filteredData.length === 1) {
        this.filteredData[0].searched += 1
        this.showButton = false
      }
    },
    openModal () {
      this.showModal = true
    },
    closeModal () {
      this.showModal = false
    },
    handleNewCreateSubmit () {
      // 새로운 데이터가 등록되었을 때의 처리
      this.closeModal()
    }
  },
  mounted () {
    // URL 해시가 #helper 인 경우 스크롤을 부드럽게 이동
    if (window.location.hash === '#helper') {
      const helperElement = document.querySelector('#helper')
      if (helperElement) {
        helperElement.scrollIntoView({ behavior: 'smooth' })
      }
    }
  },
  watch: {
    searchNum () {
      this.showButton = true
    }
  },
  components: {
    Modal,
    NewCreate
  }
}
</script>

<style>
.Read-main {
  max-width: 1000px;
  margin: 0 auto;
}

* {
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
}

/*button Styles*/
.button-wrapper {
  text-align: right;
  margin-right: 20px;
}

.button-wrapper .text {
  margin-right: 10px;
  /* 텍스트 오른쪽 마진 설정 */
}

.theme-button {
  background-color: #4FC3A1;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.theme-button:hover {
  background-color: #3D9C8B;
}

.theme-button:active {
  background-color: #32787A;
}

/* Table Styles */

.table-wrapper {
  margin: 10px 70px 70px;
  /*box-shadow: 0px 35px 50px rgba(0, 0, 0, 0.2);*/
  overflow-x: hidden;
  /* 가로 스크롤바 숨김 */
}

.fl-table {
  border-radius: 5px;
  font-size: 12px;
  font-weight: normal;
  border: none;
  border-collapse: collapse;
  width: 100%;
  max-width: calc(100% - 40px);
  /* 여백 포함한 최대 너비 설정 */
  table-layout: fixed;
  background-color: white;
  margin: 0 20px;
  /* 좌우 여백 설정 */
  box-sizing: border-box;
  /* 너비에 여백을 포함하도록 box-sizing 속성 추가 */
}

.fl-table td,
.fl-table th {
  text-align: center;
  padding: 8px;
}

.fl-table td {
  border-right: 1px solid #f8f8f8;
  font-size: 12px;
  word-wrap: break-word;
  max-width: 0;
}

.fl-table thead th {
  color: #ffffff;
  background: #4FC3A1;
}

.fl-table thead th:nth-child(odd) {
  color: #ffffff;
  background: #324960;
}

.fl-table tr:nth-child(even) {
  background: #F8F8F8;
}

/* @@ 아래에 테두리 추가 */
.fl-table tbody tr:last-child td {
  border-bottom: 1px solid #ccc;
}

.fl-table tbody tr:last-child td::after {
  content: "";
  position: absolute;
  /* 절대 위치 설정 */
  left: 0;
  right: 0;
  bottom: -1px;
  /* 테두리가 약간 흐려지게 될 위치 조정 */
  height: 1px;
  background-color: rgba(204, 204, 204, 0.5);
  /* 흐릿한 효과를 주기 위한 테두리 색상 설정 */
}

.fl-table tbody tr:hover {
  background-color: #E6E4E4;
  cursor: pointer;
}

/*search boc*/
.search {
  position: relative;
  width: 300px;
  height: 60px;
  text-align: center;
  margin: 0 auto;
  /* 수평 가운데 정렬을 위한 margin 속성 추가 */
}

.searchInput {
  width: 100%;
  border: 1px solid #bbb;
  border-radius: 8px;
  padding: 10px 12px;
  font-size: 14px;
}

img {
  position: absolute;
  width: 17px;
  top: 10px;
  right: 12px;
  margin: 0;
}

.searched-number {
  margin-right: 10px;
}

/* Responsive */

@media (max-width: 767px) {
  .fl-table {
    display: block;
    width: 100%;
  }

  .table-wrapper:before {
    content: "Scroll horizontally >";
    display: block;
    text-align: right;
    font-size: 11px;
    color: white;
    padding: 0 0 10px;
  }

  .fl-table thead,
  .fl-table tbody,
  .fl-table thead th {
    display: block;
  }

  .fl-table thead th:last-child {
    border-bottom: none;
  }

  .fl-table thead {
    float: left;
  }

  .fl-table tbody {
    width: auto;
    position: relative;
    overflow-x: auto;
  }

  .fl-table td,
  .fl-table th {
    padding: 20px .625em .625em .625em;
    height: 60px;
    vertical-align: middle;
    box-sizing: border-box;
    overflow-x: hidden;
    overflow-y: auto;
    width: 120px;
    font-size: 13px;
    text-overflow: ellipsis;
  }

  .fl-table thead th {
    text-align: left;
    border-bottom: 1px solid #f7f7f9;
  }

  .fl-table tbody tr {
    display: table-cell;
  }

  .fl-table tbody tr:nth-child(odd) {
    background: none;
  }

  .fl-table tr:nth-child(even) {
    background: transparent;
  }

  .fl-table tr td:nth-child(odd) {
    background: #F8F8F8;
    border-right: 1px solid #E6E4E4;
  }

  .fl-table tr td:nth-child(even) {
    border-right: 1px solid #E6E4E4;
  }

  .fl-table tbody td {
    display: block;
    text-align: center;
  }
}
</style>
