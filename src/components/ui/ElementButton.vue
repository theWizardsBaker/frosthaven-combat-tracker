<template>
  <a
    @click="createOrConsumeElement()"
    @dblclick="position = 1"
    :class="[
      elementColor[elementPosition],
      position == 1 && 'element-waning-button',
    ]"
    class="btn btn-circle btn-outline"
  >
    <font-awesome-icon
      :icon="icon"
      class="fa-xl text-lg"
    />
  </a>
</template>

<script>

const ELEMENT_COLORS = {
  red: {
    inert: 'glass text-red-500 hover:bg-red-300 hover:text-red-500 active:bg-red-500',
    waning: 'text-white bg-red-500 hover:bg-red-300 hover:text-white',
    strong: 'text-white bg-red-500 hover:bg-red-300 hover:text-white',
  },
  blue: {
    inert: 'glass text-blue-500 hover:text-blue-500 hover:bg-blue-300 active:bg-blue-500',
    waning: 'text-white bg-blue-500 hover:bg-blue-300 hover:text-white',
    strong: 'text-white bg-blue-500 hover:bg-blue-300 hover:text-white',
  },
  teal: {
    inert: 'glass text-teal-500 hover:text-teal-500 hover:bg-teal-300 active:bg-teal-500',
    waning: 'text-white bg-teal-500 hover:bg-teal-300 hover:text-white',
    strong: 'text-white bg-teal-500 hover:bg-teal-300 hover:text-white',
  },
  green: {
    inert: 'glass text-green-500 hover:text-green-500 hover:bg-green-300 active:bg-green-500',
    waning: 'text-white bg-green-500 hover:bg-green-300 hover:text-white',
    strong: 'text-white bg-green-500 hover:bg-green-300 hover:text-white',
  },
  yellow: {
    inert: 'glass text-yellow-400 hover:text-yellow-400 hover:bg-yellow-300 active:bg-yellow-400',
    waning: 'text-white bg-yellow-400 hover:bg-yellow-300 hover:text-white',
    strong: 'text-white bg-yellow-400 hover:bg-yellow-300 hover:text-white',
  },
  black: {
    inert: 'glass text-black hover:text-black hover:bg-slate-300 active:bg-black',
    waning: 'text-white bg-black hover:bg-black hover:text-white',
    strong: 'text-white bg-black hover:bg-black hover:text-white',
  },
}

export default {
  name: "Element Button",

  props: {
    color: {
      type: String,
      required: true,
      validator(value) {
        return Object.keys(ELEMENT_COLORS).includes(value)
      }
    },
    icon: String,
    round: Number,
  },

  computed: {
    elementPosition() {
      return this.elementPositions[this.position]
    },
    elementColor() {
      return ELEMENT_COLORS[this.color]
    }
  },

  watch: {
    round(newVal) {
      this.position = this.position > 0 ? this.position - 1 : 0
    }
  },

  data() {
    return {
      position: 0,
      elementPositions: [
        "inert",
        "waning",
        "strong"
      ],
    };
  },

  methods: {
    createOrConsumeElement() {
      this.position = this.position > 0 ? 0 : 2;
    }
  },
};
</script>

<style scoped>
.element-waning-button {
 background-image: linear-gradient( -30deg, #f9f9f9 0%, #f9f9f9 50%, transparent 50%, transparent 50%);
}
</style>