<template>
  <h1>catch all number</h1>
</template>

<script>
export default {
    validate({params}){
       return /^\d+$/.test(params.id);
    }
}
</script>

<style>

</style>