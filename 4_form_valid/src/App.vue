<template>
  <div class="container">
    <div class="sample" v-if="!isSend">
      <form>
        <v-input v-for="input, key in inputs" :key="key" :label="input.label" :regex="input.regex"
          @validation="makeValid(key)" @updated="updateValue($event, key)" />
      </form>
      <div class="progress_bar">
        <span class="progress_bar-line" :style="'width:' + percent + '%'"></span>
        <span class="progress_bar-plug"></span>
      </div>
      <button :disabled="!disabledSend" @click="sendData">Send</button>
    </div>
    <v-table v-else :email="inputs[0].value" :fn="inputs[1].value" :ln="inputs[2].value" :pas="inputs[3].value" />
  </div>
</template>

<script>
import vInput from '@/components/v-input.vue'
import vTable from '@/components/v-table.vue'

export default {
  name: 'App',
  components: {
    vInput, vTable
  },
  data() {
    return {
      isSend: false,
      validInputs: [],
      inputs: [
        { label: 'Email', value: '', regex: "[a-zA-Z0-9]+@[a-zA-Z0-9-]" },
        { label: 'First Name', value: '', regex: '[a-zA-Z]{6,}' },
        { label: 'Last Name', value: '', regex: '[a-zA-Z]{6,}' },
        { label: 'Password', value: '', regex: '[a-zA-Z]{6,}' }
      ]
    }
  },
  computed: {
    percent() {
      return (this.validInputs.length / this.inputs.length) * 100
    },
    disabledSend() {
      return this.percent === 100
    }
  },
  methods: {
    makeValid(key) {
      let item = this.inputs[key]
      item.isValid = new RegExp(item.regex).test(item.value)

      this.validInputs = []
      this.inputs.forEach(input => {
        if (input.isValid === true)
          this.validInputs.push(input.label)
      })
    },
    updateValue(value, key) {
      this.inputs[key].value = value
    },
    sendData() { this.isSend = !this.isSend }
  },
  created() {
    this.inputs.forEach(item => { item.isValid = false })
  }
}
</script>

<style scoped>
@import '@/assets/style.css';

form {
  display: flex;
  flex-direction: column;
}

.progress_bar {
  margin-top: 20px;
  position: relative;
  max-width: 300px;
}

.progress_bar span {
  position: absolute;
  border-radius: 2px;
  display: block;
  height: 10px;
}

.progress_bar-line {
  z-index: 2;
  transition: .5s;
  background-color: #76c460;
}

.progress_bar-plug {
  z-index: 1;
  width: 100%;
  background-color: #ccc;
}

button:disabled {
  color: #808080;
  background-color: #ccc;
  border: 2px solid #808080;
}

button {
  cursor: pointer;
  font-size: 14px;
  margin-top: 25px;
  padding: 8px 20px;
  border-radius: 4px;
  background-color: cadetblue;
}
</style>
