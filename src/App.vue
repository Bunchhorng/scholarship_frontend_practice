<script setup lang="ts">
import Navbar from './components/layout/navbar.vue';
import Footer from './components/layout/Footer.vue';

</script>

<template>
   <nav class="sticky top-0 z-50">
     <navbar/>
   </nav> 

   <main>
      <router-view></router-view>
   </main>

  <footer>
    <Footer/>
  </footer>
  
</template>
