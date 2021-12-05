<template>
  <div>
    <div class="price text-sm">
      <span class="text-2xl font-bold">&pound;233.78</span> per month
    </div>
    <div class="price text-sm pt-1 pb-2">&pound;18,980.00 cash price</div>
    <div>
      <a href="#finance" class="text-blue text-sm">Adjust finance quote</a>
    </div>
    <div>
      <div class="pill-wrap">
        <div class="pill bg-orange text-white inline-block rounded-full px-2">
          IN STOCK - AVAILABLE NOW
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Price'
}
</script>

<style lang="scss" scoped>
.pill {
  font-size: 10px;
}
a:hover{
    text-decoration: underline;
}
</style>