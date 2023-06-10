<template>
    <div>
        <h1>자유게시판</h1>
        <table>
            <tr>
                <td>작성자</td>
                <td>제목</td>
                <td>내용</td>
            </tr>
            <tr :key="index" v-for="(value,index) in data">
                <td>{{value.writer}}</td>
                <td v-on:click="detail(index)">{{value.title}}</td>
                <td>{{value.content}}</td>
            </tr>
        </table>
        <button @click="write()">글쓰기</button>
    </div>
</template>

<script>
import data from '../data'
export default {
  name: 'Read',
  data () {
    return {
      data: data
    }
  },
  methods: {
    write () {
      this.$router.push({
        path: 'NewCreate'
      })
    },
    detail (index) {
      this.$router.push({
        name: 'Detail',
        params: {
          contentId: index
        }
      })
    }
  }
}
</script>
