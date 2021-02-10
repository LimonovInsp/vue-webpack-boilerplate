<template>
   <form>
       <div>
        <label for="name">Name:</label>
        <input type="text" :value="name" @input="updateName($event.target.value)">
        <input type="email" :value="email" @input="updateEmail($event.target.value)">
       </div>
   </form>
</template>

<script>
    export default {
        props: {
            name: String,
            email: String,
        },
        setup(props, {emit}) {
            const updateName = (value) => {
                emit("update:name", value);
            }

            const updateEmail = (value) => {
                emit("update:email", value);
            }

            return {
                updateName,
                updateEmail
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>