<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
    <div v-if="product" class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
      
      <!-- Gallery Section -->
      <div class="space-y-4">
        <!-- Main Image -->
        <div class="w-full aspect-square bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
          <img 
            :src="product.gallery.img1" 
            :alt="product.name || 'Product Image'" 
            class="w-full h-full object-cover object-center"
          >
        </div>

        <!-- Image Thumbnails Grid -->
        <div class="grid grid-cols-4 gap-3">
          <div 
            v-for="(img, key) in [product.gallery.img2, product.gallery.img3, product.gallery.img4, product.gallery.img5]" 
            :key="key"
            class="aspect-square bg-gray-50 rounded-lg overflow-hidden border border-gray-200 hover:border-gray-900 transition-colors cursor-pointer"
          >
            <img 
              :src="img" 
              :alt="`Product thumbnail ${key + 2}`" 
              class="w-full h-full object-cover object-center"
            >
          </div>
        </div>
      </div>

      <!-- Product Details Section -->
      <div class="flex flex-col h-full justify-between space-y-6 pt-2">
        <div class="space-y-4">
          <!-- Header & Price -->
          <div>
            <h1 class="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
              {{ product.name || 'Product Title' }}
            </h1>
            <div class="mt-3 flex items-baseline gap-4">
              <span class="text-3xl font-extrabold text-emerald-600">
                ${{ product.price }}
              </span>
              <!-- Stock Status -->
              <span 
                class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold"
                :class="product.qty > 0 ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-700'"
              >
                {{ product.qty > 0 ? `In Stock (${product.qty} left)` : 'Out of Stock' }}
              </span>
            </div>
          </div>

          <hr class="border-gray-100">

          <!-- Description -->
          <div>
            <h2 class="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-2">Description</h2>
            <p class="text-base text-gray-600 leading-relaxed">
              {{ product.description }}
            </p>
          </div>
        </div>

        <!-- Action Area -->
        <div class="space-y-3 pt-6 border-t border-gray-100">
          <button 
            :disabled="product.qty <= 0"
            class="w-full bg-gray-900 hover:bg-gray-800 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-medium py-3.5 px-6 rounded-xl transition-colors text-base shadow-sm"
          >
            Add to Cart
          </button>
        </div>
      </div>

    </div>

    <!-- 404 Not Found State -->
    <div v-else class="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <span class="text-6xl font-black text-gray-200 mb-4">404</span>
      <h2 class="text-2xl font-bold text-gray-900 mb-2">Product Not Found</h2>
      <p class="text-gray-500 max-w-md mb-6">
        The item you are looking for doesn't exist or has been removed.
      </p>
      <a 
        href="#" 
        class="inline-flex items-center justify-center bg-gray-900 hover:bg-gray-800 text-white font-medium py-2.5 px-5 rounded-lg transition-colors text-sm"
      >
        Back to Shop
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { products } from '../../../data/product';


const route = useRoute()
const productId = parseInt(route.params.id as string)
const product = products.find(pro=>pro.id===productId)

</script>
