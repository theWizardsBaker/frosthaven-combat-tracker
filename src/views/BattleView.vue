<template>
  <main>
    <div class="navbar bg-base-100">
      <a class="btn btn-ghost normal-case text-xl">Round</a>
      <element-button
        v-for="element in elements"
        :color="element.color"
        :icon="element.icon"
      />
    </div>
  </main>
</template>

<script>
import ElementButton from "@/components/ui/ElementButton.vue";

export default {
  name: "Battle View",

  components: {
    ElementButton
  },

  computed: {

  },

  data() {
    return {
      elements: [
        {
          icon: "fa-fire",
          color: "red",
        },
        {
          icon: "fa-snowflake",
          color: "blue",
        },
        {
          icon: "fa-wind",
          color: "teal",
        },
        {
          icon: "fa-leaf",
          color: "green",
        },
        {
          icon: "fa-sun",
          color: "yellow",
        },
        {
          icon: "fa-moon",
          color: "black",
        },
      ]
    };
  },

  methods: {

  },
};
</script>

<style scoped>

</style>