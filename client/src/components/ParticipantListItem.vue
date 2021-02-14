<template>
    <div class="col-sm-2 mb-3">
        <div class="card p-2 text-center">
            <span class="text-monospace mb-2">{{ participant.name }}</span>
            <div class="d-flex align-items-center justify-content-around mb-2">
                <div v-b-tooltip.hover title="Morning shifts">
                    <b-icon-sun variant="warning" class="mr-2"/>{{ morningShifts }}
                </div>
                <div v-b-tooltip.hover title="Evening shifts">
                    <b-icon-moon variant="primary" class="mr-2"/>{{ eveningShifts }}
                </div>
            </div>
            <button class="btn btn-sm btn-secondary" @click="viewHistory">View history</button>
            <b-modal @close="showModal = false" v-model="showModal">
                <template v-if="participant.shifts.length">
                    <div v-for="shift in participant.shifts" :key="shift.id">
                        <p>{{ getFormattedDate(shift.date) }}</p>
                        <p>{{ shift.type }} shift</p>
                        <hr/>
                    </div>
                </template>
                <template v-else>No shifts so far</template>
            </b-modal>
        </div>
    </div>
</template>
<script>
import moment from 'moment';

export default {
    name: 'ParticipantListItem',
    props: {
        participant: {
            type: Object,
            required: true,
        }
    },
    data: () => ({
        showModal: false,
    }),
    computed: {
        morningShifts() {
            return this.participant.shifts.filter(shift => shift.type === 'morning').length;
        },
        eveningShifts() {
            return this.participant.shifts.filter(shift => shift.type === 'evening').length;
        },
    },
    methods: {
        viewHistory() {
            this.showModal = true;
        },
        getFormattedDate(date) {
            return moment(date).format('dddd, MMMM Do');
        },
    }
}
</script>