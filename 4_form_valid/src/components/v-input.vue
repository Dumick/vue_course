<template>
    <label :for="id" :class="validInput">
        {{ label }}
        <input type="text" :id="id" :value="compValue" @change="validation" @input="updateValue">
    </label>
</template>

<script>
export default {
    name: 'vInput',
    props: {
        compValue: {
            type: String,
            requared: true
        },
        id: {
            type: String,
            requared: true
        },
        label: {
            type: String,
            requared: true
        },
        regex: {
            type: String,
            requared: true
        }
    },
    computed: {
        validInput() {
            let regex = new RegExp(this.regex)
            let value = this.compValue

            return {
                'successful': value.length > 0 && (regex).test(this.compValue),
                'error': value.length > 0 && !(regex).test(this.compValue),
            }
        }
    },
    methods: {
        updateValue(e) {
            this.$emit('update:compValue', e.target.value)
        },
        validation() {
            this.$emit('validation', new RegExp(this.regex).test(this.compValue));
        }
    }
}
</script>

<style scoped>
@import '@/assets/style.css';

label {
    display: flex;
    max-width: 300px;
    margin-top: 10px;
    flex-direction: column;

    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

label.successful input {
    border-color: #76c460;
}

label.error input {
    border-color: #c14343;
}

input {
    margin-top: 10px;
    padding: 4px 12px;
    border-radius: 2px;
    border: 2px solid #000;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
</style>