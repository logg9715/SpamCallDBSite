<template>
  <div>
      <input v-model="writer" placeholder="글쓴이">
      <br>
      <input v-model="title" placeholder="제목">
      <br>
      <textarea v-model="content" placeholder="내용"></textarea>
      <br>
      <button @click="write">작성</button>
  </div>
</template>

<script>
import data from '@/data'

export default {
  name: 'NewCreate',
  data () {
    return {
      data: data,
      writer: '',
      title: '',
      content: ''
    }
  },
  methods: {
    write () {
      this.data.push({
        writer: this.writer,
        title: this.title,
        content: this.content
      })
      this.$router.push({
        path: '/'
      })
    }
  }
}
</script>
