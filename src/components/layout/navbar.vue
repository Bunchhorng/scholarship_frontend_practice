<template>
   <nav class="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-16">
      
      <!-- Brand Logo -->
      <router-link to="/" class="text-xl font-bold text-gray-900 tracking-tight hover:text-indigo-600 transition-colors">
        Brand<span class="text-indigo-600">.</span>
      </router-link>

      <!-- Navigation Links -->
      <div class="flex items-center gap-1 sm:gap-2">
        <router-link 
          to="/" 
          class="px-3.5 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-all active:scale-95"
          exact-active-class="!text-indigo-600 !bg-indigo-50 font-semibold"
        >
          Home
        </router-link>

        <router-link 
          to="/about" 
          class="px-3.5 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-all active:scale-95"
          active-class="!text-indigo-600 !bg-indigo-50 font-semibold"
        >
          About
        </router-link>

        <router-link 
          to="/products" 
          class="px-3.5 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-all active:scale-95"
          active-class="!text-indigo-600 !bg-indigo-50 font-semibold"
        >
          Product
        </router-link>

        <router-link 
          to="/products-api" 
          class="px-3.5 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-all active:scale-95"
          active-class="!text-indigo-600 !bg-indigo-50 font-semibold"
        >
          Product API
        </router-link>
      </div>
      

      <!-- Action Button (Optional) -->
      <div class="hidden sm:flex items-center">
        <router-link 
          to="/contact" 
          class="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 shadow-sm transition-all active:scale-95"
        >
          Get Started
        </router-link>
      </div>

    </div>
  </div>
</nav>
</template>

