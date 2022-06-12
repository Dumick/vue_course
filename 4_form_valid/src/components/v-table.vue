<template>
    <table cellspacing="0">
        <tr>
            <td>Email</td>
            <td>{{ email }}</td>
        </tr>
        <tr>
            <td>First Name</td>
            <td>{{ fn }}</td>
        </tr>
        <tr>
            <td>Last Name</td>
            <td>{{ ln }}</td>
        </tr>
        <tr>
            <td>Password</td>
            <td>{{ pas }}</td>
        </tr>
    </table>
</template>

<script>
export default {
    name: 'vTable',
    props: {
        email: { type: String, requared: true },
        fn: { type: String, requared: true },
        ln: { type: String, requared: true },
        pas: { type: String, requared: true }
    }
}
</script>

<style scoped>
@import '@/assets/style.css';

td {
    padding: 6px;
    border: 1px solid #000;
}
</style>