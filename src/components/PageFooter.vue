<template>
  <footer class="page-footer">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <h4>문의</h4>
          <ul>
            <li>고객상담 전화번호: 010-1234-1234</li>
            <li>이메일 문의: support@mail.com</li>
          </ul>
        </div>
        <div class="col-md-4">
          <h4>후원 정보</h4>
          <ul>
            <li>&copy; 코핀컴퍼니</li>
            <li>&copy; 철혈공조</li>
            <li>키보토스 연방학생위원회</li>
          </ul>
        </div>
      </div>
    </div>
    <br><br><br>
    <div class="copy-right">
      &copy; 2023 Gehenna School All rights reserved.
    </div>
  </footer>
</template>

<style scoped>
.page-wrapper {
  position: relative;
  min-height: 100vh;
  padding-bottom: 100px; /* 푸터의 높이만큼 하단 여백 설정 */
}

.page-footer {
  position: absolute;
  left: 0;
  width: 100%;
  background-color: #1f2937;
  color: #fff;
  padding: 40px 0;
}

.page-footer .container {
  max-width: 1140px;
  margin: 0 auto;
}

.page-footer h4 {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

.page-footer ul {
  list-style-type: none;
  padding: 0;
}

.page-footer ul li {
  margin-bottom: 8px;
}

.copy-right {
  text-align: center;
  padding: 16px 0;
  background-color: #0e151f;
  color: #fff;
}
</style>
