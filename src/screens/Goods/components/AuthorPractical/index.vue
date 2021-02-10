<template>
    <h1>{{amount}}</h1>
    <h1>{{nameUpper}} compared with {{name}}</h1>
    <button @click="increaseAmount">Increase</button>
    <p>{{format(new Date())}} and {{new Date().toString()}}</p>
    <FormPractical v-model:name="inviteName" v-model:email="inviteEmail" />
    <div>
        <span>{{inviteName}}</span>
        <span>{{inviteEmail}}</span>
    </div>
</template>

<script>
import FormPractical from '../FormPractical';
import format from './helpers/DataFormat';
import {
    ref,
    computed,
    watch,
    watchEffect
} from "vue";

    export default {
        name: 'authorpractical',
        components: {
            FormPractical
        },
       setup() {
            const inviteName = ref('Johnny');
            const inviteEmail = ref('bis.limonov@gmail.com');
            const amount = ref(10);
            const name = ref("author");
            const nameUpper = computed(() => {
                return name.value.toUpperCase();
            });
            const increaseAmount = () => {
                amount.value += 2;
            }
            watchEffect(() => {
                console.log(amount.value);
            })
            watch(amount, (newVal, oldVal) => {
                console.log(`${newVal} and ${oldVal}`);
            })
            return {
                amount,
                name,
                inviteName,
                inviteEmail,
                nameUpper,
                increaseAmount,
                format
            }
       }
    }
</script>

<style lang="scss" scoped>

</style>