<template>
  <div>
    <chome v-if="datahalaman==0"/>
    <cbookmark v-if="datahalaman==1" />
    <cinfo v-if="datahalaman==2"/>
  </div>
</template>

<script>
export default {
  props:{
    datahalaman: Number,
  }
}
</script>

<style>

</style>