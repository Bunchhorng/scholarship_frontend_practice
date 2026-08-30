<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        <div 
            v-for="pro in products" 
            :key="pro.id" 
            class="flex flex-col bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300"
        >
            <!-- Image Wrapper -->
            <div class="relative w-full aspect-square bg-gray-50 overflow-hidden">
            <img 
                :src="pro.gallery.img1" 
                :alt="pro.name"
                class="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
            >
            <!-- Stock Badge -->
            <span class="absolute top-3 right-3 bg-gray-900/80 backdrop-blur-sm text-white text-xs font-medium px-2.5 py-1 rounded-full">
                {{ pro.qty }} left
            </span>
            </div>

            <!-- Product Info -->
            <div class="flex flex-col flex-1 p-5">
            <div class="flex items-start justify-between gap-2 mb-2">
                <h3 class="text-base font-semibold text-gray-900 truncate">
                {{ pro.name }}
                </h3>
                <span class="text-lg font-bold text-emerald-600">
                ${{ pro.price }}
                </span>
            </div>

            <p class="text-sm text-gray-500 line-clamp-2 mb-4 flex-1">
                {{ pro.description }}
            </p>

            <!-- Action Button -->
            <router-link 
                :to="`/products/${pro.id}`" 
                class="block text-center w-full bg-gray-900 hover:bg-gray-800 text-white font-medium text-sm py-2.5 px-4 rounded-lg transition-colors"
                >
                View Detail
            </router-link>
            
            </div>
        </div>
        </div>
</template>

<script setup lang="ts">
import { products } from '../../../data/product';
</script>

