<template>
  <div align="center" class="default">
    <tengah :datahalaman="halaman"/>
    <bawah @click="ganti($event)"/>
  </div>
</template>
<script>
export default {
  data(){
    return{
      halaman:0
    }
  },
  methods:{
    ganti(index){
      this.halaman=index;
    }
  }
}
</script>

