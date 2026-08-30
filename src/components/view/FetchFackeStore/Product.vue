<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
  <div 
    v-for="pro in products" 
    :key="pro.id" 
    class="group flex flex-col bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
  >
    <div class="h-52 bg-slate-50 flex items-center justify-center p-4 overflow-hidden">
      <img 
        :src="pro.image" 
        :alt="pro.title" 
        class="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
      >
    </div>

    <div class="flex flex-col flex-1 p-5">
      <h2 class="text-base font-bold text-slate-800 truncate mb-1" :title="pro.title">
        {{ pro.title }}
      </h2>

      <p class="text-sm text-slate-500 line-clamp-2 mb-4 flex-1">
        {{ pro.description }}
      </p>

      <div class="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
        <span class="text-lg font-bold text-slate-900">${{ pro.price }}</span>
        <button class="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-full shadow-sm hover:shadow transition-all duration-200 active:scale-95">
          Add To Cart
        </button>
      </div>
    </div>
  </div>
</div>
</template>

<script setup lang="ts">
import axios from 'axios';
import { onMounted, ref } from 'vue';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}
const products = ref<Product[]>([]);
const fetchProducts =  async () =>{
    try {
       const res = await axios.get('https://fakestoreapi.com/products')
       products.value = res.data
       console.log('Fetched products:', products.value );
    } catch (error) {
        console.error('Fetch aip failed', error);
    }
}

onMounted(()=>{
    fetchProducts()
})

</script>

