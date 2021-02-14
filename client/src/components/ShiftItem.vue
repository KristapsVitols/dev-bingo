<template>
    <div>
        <h4 class="mb-3">Current shift - {{ shift.name }}</h4>
        <div class="row">
            <div v-for="spot in shift.spots" :key="spot.id" class="col-sm-4">
                <div class="card p-3 mb-3" :class="getBgClass(spot)">
                    <p>{{ spot.participant.name }}</p>
                    <div class="d-flex">
                        <div v-if="spot.type === 'morning'" v-b-tooltip.hover title="Morning shifts">
                            <b-icon-sun variant="warning"/>
                        </div>
                        <div v-else v-b-tooltip.hover title="Evening shifts">
                            <b-icon-moon variant="primary"/>
                        </div>
                        <span class="ml-3">{{ getFormattedDate(spot.date) }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import moment from 'moment-timezone';

export default {
    name: 'ShiftItem',
    props: {
        shift: {
            type: Object,
            required: true,
        }
    },
    methods: {
        // current spot in shift
        getBgClass(spot) {
            return moment(spot.date).isSame(moment(), 'day') ? 'bg-secondary' : '';
        },
        getFormattedDate(date) {
            return moment(date).format('dddd, MMMM Do');
        },
    },
}
</script>