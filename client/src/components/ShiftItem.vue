<template>
    <div>
        <h4 class="mb-4">Current shift - {{ shift.name }}</h4>
        <h5 v-if="!shift.spots.length" class="text-center mt-4">
            No one assigned yet.
        </h5>
        <div v-else class="row">
            <b-carousel
                id="carousel-1"
                v-model="slide"
                controls
                :interval="0"
                img-width="512"
                img-height="240"
                indicators
                class="mb-5 offset-sm-3 col-sm-6"
                style="text-shadow: 1px 1px 2px #333;"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd">
<!--                <div v-for="spot in shift.spots" :key="spot.id" class="col-sm-4">-->
                    <b-carousel-slide
                        v-for="spot in shift.spots"
                        :key="spot.id"
                        :caption="spot.participant.name"
                        :text="getFormattedDate(spot.date)"
                        img-src="img/nice-image.jpg">
                        <b-icon-sun v-if="spot.type === 'morning'" variant="warning"/>
                        <b-icon-moon v-else variant="primary"/>
                    </b-carousel-slide>
<!--                </div>-->
            </b-carousel>
<!--                <div class="card p-3 mb-3" :class="getBgClass(spot)">-->
<!--                    <p>{{ spot.participant.name }}</p>-->
<!--                    <div class="d-flex">-->
<!--                        <div v-if="spot.type === 'morning'" v-b-tooltip.hover title="Morning shifts">-->
<!--                            <b-icon-sun variant="warning"/>-->
<!--                        </div>-->
<!--                        <div v-else v-b-tooltip.hover title="Evening shifts">-->
<!--                            <b-icon-moon variant="primary"/>-->
<!--                        </div>-->
<!--                        <span class="ml-3">{{ getFormattedDate(spot.date) }}</span>-->
<!--                    </div>-->
<!--                </div>-->
        </div>
    </div>
</template>
<script>
import moment from 'moment';

export default {
    name: 'ShiftItem',
    props: {
        shift: {
            type: Object,
            required: true,
        }
    },
    data: () => ({
        slide: 0,
        sliding: null,
    }),
    created() {
        this.setCurrentSpot();
    },
    methods: {
        // current spot in shift
        setCurrentSpot() {
            this.shift.spots.forEach((spot, i) => {
                if (moment(spot.date).isSame(moment(), 'day')) {
                    this.slide = i;
                }
            });
        },
        getFormattedDate(date) {
            return moment(date).format('dddd, MMMM Do');
        },
        onSlideStart() {
            this.sliding = true;
        },
        onSlideEnd() {
            this.sliding = false;
        },
    },
}
</script>