<template>
  <div>
    <h1>Home Page</h1>
    <h2>Data</h2>
    <pre>{{items}}</pre>
  </div>
</template>

<script setup>
const { data: items } = await useFetch('/api/items')

</script>

<style>
</style>