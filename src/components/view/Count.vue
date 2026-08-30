<template>
    <div class="max-w-sm mx-auto p-6 bg-white rounded-2xl shadow-xl border border-slate-100 flex flex-col items-center gap-6 text-center">
  <div class="space-y-1">
    <span class="text-xs font-semibold tracking-wider text-slate-400 uppercase">Current Count</span>
    <h1 class="text-6xl font-black text-slate-900 tracking-tight">
      {{ counter.count }}
    </h1>
  </div>

  <div class="inline-flex items-center gap-2 px-3 py-1.5 bg-indigo-50 text-indigo-700 rounded-full text-sm font-semibold">
    <span class="text-indigo-400">2×</span>
    <span>{{ counter.doubleValue }}</span>
  </div>

  <div class="flex items-center gap-3 w-full pt-2">
    <button 
      @click="counter.decrease"
      class="flex-1 py-2.5 px-4 bg-slate-100 hover:bg-slate-200 active:scale-95 text-slate-700 font-semibold rounded-xl transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-slate-300"
    >
      Sub Value
    </button>

    <button 
      @click="counter.increase"
      class="flex-1 py-2.5 px-4 bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white font-semibold rounded-xl shadow-md shadow-indigo-200 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    >
      Add Value
    </button>
  </div>
</div>
</template>

<script setup lang="ts">
import { useCounterStore } from '../../store/count';


const counter = useCounterStore()
</script>
