<template>
    <div>Hello {{ text }}!</div>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            default: 'world',
        },
    },
};
</script>