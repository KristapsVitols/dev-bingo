<template>
    <div>
        {{ participant.name }}
    </div>
</template>
<script>
export default {
    name: 'ParticipantListItem',
    props: {
        participant: {
            type: Object,
            required: true,
        }
    }
}
</script>