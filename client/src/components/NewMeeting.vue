<template>
    <div class="container mx-auto">
        <div class="flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0">
            <!-- Left Section -->
            <div class="md:w-1/2 text-center md:text-left relative mx-2">
                <h1 class="text-4xl font-semibold text-gray-800">Video calls and virtual meetings accessible to all</h1>
                <p class="mt-4 text-gray-600">Stay connected, collaborate seamlessly, and celebrate special moments from anywhere with Atlas Community Edition.</p>
                <div class="mt-6 relative">
                    <!-- Dropdown Button -->
                    <div class="dropdown inline-block">
                        <button @click="toggleDropdown" class="bg-blue-600 text-white py-2 px-4 rounded-lg">
                            Schedule a new meeting
                        </button>
                        <div v-if="isDropdownVisible"
                            class="dropdown-content bg-white rounded-lg shadow-lg mt-2 absolute">
                            <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">Set up a meeting</a>
                            <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">Start an immediate meeting</a>
                            <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">Set up a meeting and send invitations to members by email</a>
                        </div>
                    </div>
                    <hr class="my-2">
                    <!-- Input and Join Button -->
                    <div class="mt-4 md:mt-0 inline-block">
                        <input type="text" placeholder="Input your meeting code"
                            class="border border-gray-300 rounded-lg py-2 px-4 w-full md:w-auto me-2">
                        <button
                            class="mt-2 md:mt-0 bg-gray-300 text-gray-700 py-2 px-4 rounded-lg">Join the meeting</button>
                    </div>
                </div>
                <a href="#" class="text-blue-600 mt-4 block">Discover more about Atlas</a>
            </div>

            <!-- Right Section -->
            <div class="md:w-1/2 flex items-center justify-center mx-2">
                <div class="text-center">
                    <div class="mb-4">
                        <img src="/images/icon.png" alt="Logo" class="mx-auto w-44 h-44">
                    </div>
                    <h2 class="text-2xl font-semibold text-gray-800">Experience the full range of features offered by Atlas Enterprise Edition</h2>
                    <p class="mt-2 text-gray-600">Take advantage of extended group calls, team management features, and more by exploring the Atlas Enterprise plan.</p>
                    <button class="mt-6 bg-blue-600 text-white py-2 px-4 rounded-lg">Uncover the plan’s perks!</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isDropdownVisible: false,
        };
    },
    methods: {
        toggleDropdown() {
            this.isDropdownVisible = !this.isDropdownVisible;
        },
        handleClickOutside(event) {
            if (!this.$el.contains(event.target)) {
                this.isDropdownVisible = false;
            }
        },
    },
    mounted() {
        document.addEventListener('click', this.handleClickOutside);
    },
    beforeUnmount() {
        document.removeEventListener('click', this.handleClickOutside);
    },
};
</script>

<style scoped>
/* Scoped styles for the component */
.dropdown-content {
    display: none;
}
</style>