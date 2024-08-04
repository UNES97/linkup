<script>
import CurrentDateTime from './CurrentDateTime.vue';
export default {
    components: {
        CurrentDateTime
    },
    data() {
        
    },
    created() {
        
    },
    methods: {
        
    }
};
</script>


<template>
    <nav class="bg-white shadow-md">
        <div class="max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-22">
                <div class="flex items-center">
                    <a href="/" class="flex items-center flex-shrink-0">
                        <img src="/images/icon.png" alt="Atlas Meetings Logo" class="h-20 w-20">
                        <span class="text-xl font-semibold text-gray-800">Atlas Community</span>
                    </a>
                    <div class="hidden md:block ml-10">
                        <div class="flex space-x-1">
                            <a href="/"
                                class="text-gray-700 hover:text-gray-900 hover:text-sky-600 px-3 py-2 rounded-md text-sm font-medium">Home</a>
                            <a href="/features"
                                class="text-gray-700 hover:text-gray-900 hover:text-sky-600 px-3 py-2 rounded-md text-sm font-medium">Features</a>
                            <a href="/about"
                                class="text-gray-700 hover:text-gray-900 hover:text-sky-600 px-3 py-2 rounded-md text-sm font-medium">About
                                Us</a>
                        </div>
                    </div>
                </div>
                <div class="flex items-center">
                    <div class="hidden md:block me-3">
                        <CurrentDateTime></CurrentDateTime>
                    </div>
                    <div class="hidden md:block">
                        <a href="/enterprise"
                            class="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700">Go
                            Enterprise Version</a>
                    </div>
                    
                    <div class="-mr-2 flex md:hidden">
                        <button type="button"
                            class="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                            aria-expanded="false">
                            <span class="sr-only">Open main menu</span>
                            <!-- Heroicon name: menu -->
                            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Mobile menu, show/hide based on menu state. -->
        <div class="md:hidden">
            <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a href="/"
                    class="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">Home</a>
                <a href="/features"
                    class="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">Features</a>
                <a href="/pricing"
                    class="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">Pricing</a>
                <a href="/about"
                    class="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">About
                    Us</a>
                <a href="/contact"
                    class="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">Contact</a>
                <a href="/enterprise"
                    class="block bg-blue-600 text-white text-center px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700">Go
                    Enterprise Version</a>
            </div>
        </div>
    </nav>
</template>



<style></style>