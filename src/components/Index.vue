<template>
  <div class="min-h-screen relative">
    <Header />
    <div class="container m-auto pb-20 px-6 min-h-full">
    <h1 class="text-3xl font-bold py-6 w-full">Audi A1 25 TFSI Technik 5dr</h1>
    <div class="flex flex-wrap">
      <div class="w-full md:w-2/3 md:pr-6">
      <ImageGallery />
      <Specs />
      </div>
      <div class="w-full md:w-1/3 md:pl-6 mt-6 md:mt-0">
        <div class="price bg-white w-full mb-6 p-6">
          <Price />
        </div>
        <div class="mt-6 bg-white p-6">
          <Form />
        </div>
      </div>
    </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "./Header.vue"
import Form from './Form.vue'
import Specs from './Specs.vue'
import Price from './Price.vue'
import ImageGallery from './ImageGallery.vue'
import Footer from './Footer.vue'

export default {
  name: "Index",
  components: {
    Header,
    Form,
    Specs,
    Price,
    ImageGallery,
    Footer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
