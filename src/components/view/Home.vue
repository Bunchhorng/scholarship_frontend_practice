<template>
  <main class="min-h-screen bg-slate-50 text-slate-900">
    
    <!-- Hero Section -->
    <section class="relative overflow-hidden pt-24 pb-20 sm:pt-32 sm:pb-28">
      <!-- Background Glow -->
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-indigo-200/40 blur-[120px] rounded-full pointer-events-none -z-10"></div>

      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <!-- Status Pill -->
        <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-100 mb-6">
          <span class="w-2 h-2 rounded-full bg-indigo-600 animate-pulse"></span>
          Now Available
        </span>

        <!-- Headline -->
        <h1 class="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
          Build faster with <br class="hidden sm:inline" />
          <span class="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
            clean, modern design.
          </span>
        </h1>

        <!-- Subheading -->
        <p class="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Welcome to your new hub. Ship responsive web apps faster using streamlined, modern Tailwind components.
        </p>

        <!-- CTA Group -->
        <div class="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <router-link
            to="/about"
            class="w-full sm:w-auto px-6 py-3 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-700 shadow-md shadow-indigo-200 transition-all active:scale-95"
          >
            Explore Features
          </router-link>
          <a
            href="#features"
            class="w-full sm:w-auto px-6 py-3 rounded-xl bg-white border border-slate-200 text-slate-700 font-medium hover:bg-slate-50 transition-all active:scale-95 shadow-sm"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="py-16 bg-white border-t border-slate-200/60">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center max-w-2xl mx-auto mb-12">
          <h2 class="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Everything you need
          </h2>
          <p class="mt-2 text-slate-600">
            A solid baseline with production-ready structure and responsive typography.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <!-- Card 1 -->
          <div class="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-all">
            <div class="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold mb-4">
              ⚡
            </div>
            <h3 class="text-base font-semibold text-slate-900 mb-1">Fast & Lightweight</h3>
            <p class="text-sm text-slate-600 leading-relaxed">
              No bloated libraries. Minimal CSS utility classes for lightning-fast load times.
            </p>
          </div>

          <!-- Card 2 -->
          <div class="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-all">
            <div class="w-10 h-10 rounded-xl bg-violet-100 text-violet-600 flex items-center justify-center font-bold mb-4">
              📱
            </div>
            <h3 class="text-base font-semibold text-slate-900 mb-1">Fully Responsive</h3>
            <p class="text-sm text-slate-600 leading-relaxed">
              Looks polished across phones, tablets, laptops, and ultra-wide displays out of the box.
            </p>
          </div>

          <!-- Card 3 -->
          <div class="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-all">
            <div class="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold mb-4">
              ✨
            </div>
            <h3 class="text-base font-semibold text-slate-900 mb-1">Clean Aesthetics</h3>
            <p class="text-sm text-slate-600 leading-relaxed">
              Subtle gradients, balanced typography, and soft borders matched to your navbar design.
            </p>
          </div>

        </div>
      </div>
    </section>

  </main>
</template>
