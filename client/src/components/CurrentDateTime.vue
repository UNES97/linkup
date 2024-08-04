<template>
    <div class="text-gray-500">
        {{ dateTime }}
    </div>
</template>

<script>
export default {
    data() {
        return {
            dateTime: ''
        };
    },
    created() {
        this.updateDateTime();
        setInterval(this.updateDateTime, 1000);
    },
    methods: {
        updateDateTime() {
            const now = new Date();
            this.dateTime = now.toLocaleString('en-US', {
                weekday: 'short',
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            });
        }
    }
};
</script>

<style scoped>
</style>