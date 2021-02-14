<template>
    <div class="mt-4">
        <h4 class="mb-3">Participant List</h4>
        <div class="row">
            <ParticipantListItem v-for="participant in participants" :participant="participant" :key="participant.name"/>
        </div>
    </div>
</template>
<script>
import ParticipantListItem from '@/components/ParticipantListItem';
export default {
    name: 'ParticipantList',
    components: {ParticipantListItem},
    data: () => ({
        participants: [],
    }),
    created() {
        this.getParticipants();
    },
    methods: {
        async getParticipants() {
            const re = await fetch('/api/participants');
            const {participants} = await re.json();

            this.participants = participants;
        },
    }
}
</script>