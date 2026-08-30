<script setup>
import { ref } from 'vue'

const currentYear = new Date().getFullYear()

const footerLinks = {
  navigation: [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Product', path: '/products' },
    { name: 'Product API', path: '/products-api' },
  ],
  resources: [
    { name: 'Documentation', path: '/docs' },
    { name: 'API Reference', path: '/api-ref' },
    { name: 'Status', path: '/status' },
  ],
  legal: [
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' },
    { name: 'Contact Us', path: '/contact' },
  ]
}
</script>

<template>
  <footer class="bg-white border-t border-gray-100">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      
      <!-- Top Grid Section -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
        
        <!-- Brand Column -->
        <div class="md:col-span-1 space-y-4">
          <router-link to="/" class="text-xl font-bold text-gray-900 tracking-tight hover:text-indigo-600 transition-colors inline-block">
            Brand<span class="text-indigo-600">.</span>
          </router-link>
          <p class="text-sm text-gray-500 leading-relaxed">
            Delivering robust products and seamless API solutions for modern web platforms.
          </p>
        </div>

        <!-- Links Columns -->
        <div class="grid grid-cols-2 sm:grid-cols-3 md:col-span-3 gap-8">
          
          <!-- Column 1: Main Pages -->
          <div>
            <h3 class="text-xs font-semibold text-gray-400 uppercase tracking-wider">Navigation</h3>
            <ul class="mt-4 space-y-2.5">
              <li v-for="link in footerLinks.navigation" :key="link.path">
                <router-link 
                  :to="link.path" 
                  class="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  {{ link.name }}
                </router-link>
              </li>
            </ul>
          </div>

          <!-- Column 2: Resources -->
          <div>
            <h3 class="text-xs font-semibold text-gray-400 uppercase tracking-wider">Resources</h3>
            <ul class="mt-4 space-y-2.5">
              <li v-for="link in footerLinks.resources" :key="link.path">
                <router-link 
                  :to="link.path" 
                  class="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  {{ link.name }}
                </router-link>
              </li>
            </ul>
          </div>

          <!-- Column 3: Legal & Support -->
          <div>
            <h3 class="text-xs font-semibold text-gray-400 uppercase tracking-wider">Legal</h3>
            <ul class="mt-4 space-y-2.5">
              <li v-for="link in footerLinks.legal" :key="link.path">
                <router-link 
                  :to="link.path" 
                  class="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  {{ link.name }}
                </router-link>
              </li>
            </ul>
          </div>

        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="mt-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
        <p>&copy; {{ currentYear }} Brand. All rights reserved.</p>

        <!-- Social / Action Link -->
        <router-link 
          to="/contact" 
          class="inline-flex items-center gap-1.5 font-medium text-indigo-600 hover:text-indigo-700 transition-colors"
        >
          Get in touch
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
          </svg>
        </router-link>
      </div>

    </div>
  </footer>
</template>