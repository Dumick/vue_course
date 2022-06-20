<template>
    <h2>Error 404</h2>
    <p>{{ title }}</p>
</template>

<script>
export default {
    name: '404',
    props: {
        title: {
            type: String,
            requared: true
        }
    }
}
</script>