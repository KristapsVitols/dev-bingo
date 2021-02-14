<template>
    <div class="mt-3">
        <ShiftItem v-if="!isLoading" :shift="shift"/>
    </div>
</template>
<script>
import ShiftItem from '@/components/ShiftItem';
export default {
    name: 'Shift',
    components: {ShiftItem},
    data: () => ({
        shift: {},
        isLoading: true,
    }),
    created() {
        this.getShifts();
    },
    methods: {
        async getShifts() {
            const re = await fetch('/api/shifts');
            const {shifts: [shift]} = await re.json();

            this.shift = shift;

            this.isLoading = false;
        },
    }
}
</script>