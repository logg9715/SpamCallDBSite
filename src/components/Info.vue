<template>
    <div class="info-container">
        <h2>자기소개</h2>
        <div class="introduction">
            <img src="../img/pro.jpg" alt="프로필 사진" style="width: 150px; height: 150px;" />
            <p>
                백엔드 개발자 지망생. 프론트엔드에 큰 코 다치고 감. <br>
                이걸로 먹고 사는 사람들은 존경스럽다.
            </p>
        </div>
        <div class="dreams-goals">
            <h2>꿈 또는 목표 기술</h2>
            <p>
                백엔드 개발자인데 사실상 풀스택. 그래서 프론트엔드도 해야하는데,<br>
                일단 node.js부터 공부하자
            </p>
        </div>
        <div class="technologies">
            <h2>홈페이지에 담은 기술과 디자인</h2>
            <ul>
                <li style="text-align: left;">router에 scrollBehavior</li>
                <li style="text-align: left;">.hover로 마우스 올리면 버튼 색 변하게 하기</li>
                <li style="text-align: left;">modal창으로 DB에 새 정보 추가 창 구현</li>
                <li style="text-align: left;">computed를 활용하여 테이블에 표시되는 데이터 필터링</li>
                <li style="text-align: left;">새 DB를 입력하는 modal창에서 전화번호 칸에 숫자 이외의 <br>값을 입력하면 경고와 함께 자동으로 지워지게 구현</li>
                <li style="text-align: left;">새 데이터를 DB에 저장할때, 현재 시간을 읽어 저장날짜 추가</li>
                <li style="text-align: left;">테이블의 각 레코드를 누르면 상세 정보 페이지로 이동</li>
                <li style="text-align: left;">상세정보 창에서 해당 데이터의 신고 횟수를 읽어서,<br>일정 구간마다 위험도를 3단계로 분류</li>
            </ul>
        </div>
    </div>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
</template>

<style scoped>
.info-container {
    max-width: 600px;
    margin: 0 auto;
}

.introduction {
    margin-top: 20px;
}

.dreams-goals {
    margin-top: 40px;
}

.technologies {
    margin-top: 40px;
}

h2, .introduction p, .dreams-goals p, .technologies p {
    text-align: left;
}
</style>
