<template>
    <div>
        <ParticipantList/>
        <Shifts/>
    </div>
</template>
<script>

import ParticipantList from '@/components/ParticipantList';
import Shifts from '@/components/Shifts';

export default {
    name: 'Index',
    components: {Shifts, ParticipantList},
}
</script>
