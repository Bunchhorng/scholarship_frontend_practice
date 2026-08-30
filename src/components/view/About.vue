<template>
  <main class="min-h-screen bg-slate-50 text-slate-900">

    <!-- Header Section -->
    <section class="pt-20 pb-12 sm:pt-28 sm:pb-16 border-b border-slate-200/60 bg-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span class="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-100 mb-4">
          Our Story
        </span>
        <h1 class="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
          Building tools with <br class="hidden sm:inline" />
          <span class="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
            clarity and purpose.
          </span>
        </h1>
        <p class="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          We focus on crafting simple, intuitive, and modern web experiences that help developers and teams deliver high-impact products.
        </p>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-12 bg-white border-b border-slate-200/60">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div class="p-4 rounded-xl bg-slate-50 border border-slate-100">
            <p class="text-2xl sm:text-3xl font-extrabold text-indigo-600">99.9%</p>
            <p class="text-xs sm:text-sm text-slate-500 font-medium mt-1">Uptime</p>
          </div>
          <div class="p-4 rounded-xl bg-slate-50 border border-slate-100">
            <p class="text-2xl sm:text-3xl font-extrabold text-indigo-600">10k+</p>
            <p class="text-xs sm:text-sm text-slate-500 font-medium mt-1">Active Users</p>
          </div>
          <div class="p-4 rounded-xl bg-slate-50 border border-slate-100">
            <p class="text-2xl sm:text-3xl font-extrabold text-indigo-600">50ms</p>
            <p class="text-xs sm:text-sm text-slate-500 font-medium mt-1">Avg Latency</p>
          </div>
          <div class="p-4 rounded-xl bg-slate-50 border border-slate-100">
            <p class="text-2xl sm:text-3xl font-extrabold text-indigo-600">24/7</p>
            <p class="text-xs sm:text-sm text-slate-500 font-medium mt-1">Support</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission & Values -->
    <section class="py-16">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-2xl mb-10">
          <h2 class="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Core Principles
          </h2>
          <p class="text-slate-600 mt-2 text-sm sm:text-base">
            The core standards that dictate how we build, iterate, and support our software.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
            <span class="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 font-semibold text-sm mb-4">
              01
            </span>
            <h3 class="text-base font-semibold text-slate-900 mb-2">Simplicity First</h3>
            <p class="text-sm text-slate-600 leading-relaxed">
              We cut the unnecessary complexity so you can focus entirely on what moves the needle.
            </p>
          </div>

          <div class="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
            <span class="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 font-semibold text-sm mb-4">
              02
            </span>
            <h3 class="text-base font-semibold text-slate-900 mb-2">Performant Code</h3>
            <p class="text-sm text-slate-600 leading-relaxed">
              Clean architecture and responsive styling engineered to run fast everywhere.
            </p>
          </div>

          <div class="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
            <span class="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 font-semibold text-sm mb-4">
              03
            </span>
            <h3 class="text-base font-semibold text-slate-900 mb-2">Continuous Polish</h3>
            <p class="text-sm text-slate-600 leading-relaxed">
              Small details like spacing, contrast, and micro-interactions make good apps feel great.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Bottom CTA Banner -->
    <section class="pb-20">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 p-8 sm:p-12 text-center text-white shadow-lg shadow-indigo-100">
          <h2 class="text-2xl sm:text-3xl font-bold tracking-tight">Ready to get started?</h2>
          <p class="mt-2 text-indigo-100 max-w-xl mx-auto text-sm sm:text-base">
            Check out our home page to see features in action or start building your next project today.
          </p>
          <div class="mt-6">
            <router-link
              to="/"
              class="inline-block px-6 py-3 rounded-xl bg-white text-indigo-600 font-semibold text-sm hover:bg-indigo-50 transition-all active:scale-95 shadow-sm"
            >
              Back to Home
            </router-link>
          </div>
        </div>
      </div>
    </section>

  </main>
</template>
