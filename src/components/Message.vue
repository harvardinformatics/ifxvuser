<script>
import { mapActions, mapGetters } from "vuex"

export default {
  name: "Message",
  props: {
    vertical: {
      default: true,
      type: Boolean
    },
    top: {
      default: true,
      type: Boolean
    },
    bottom: {
      default: false,
      type: Boolean
    },
    left: {
      default: false,
      type: Boolean
    },
    right: {
      default: false,
      type: Boolean
    },
    color: {
      default: undefined,
      type: String
    },
    multiline: {
      default: false,
      type: Boolean
    },
    timeout: {
      default: 3000,
      type: Number
    }
  },
  computed: {
    ...mapGetters(["message"]),
    active: {
      get() {
        return this.$store.getters.active
      },
      set() {
        this.$store.getters.active
          ? this.$store.commit("deactivate")
          : this.$store.commit("activate")
      }
    }
  },
  methods: {
    ...mapActions(["activate", "deactivate"])
  }
}
</script>

<template>
  <v-snackbar
    v-model="active"
    :vertical="vertical"
    :top="top"
    :bottom="bottom"
    :left="left"
    :right="right"
    :color="color"
    :multi-line="multiline"
    :timeout="message.length / 30 * 1000 + 1000"
  >
    {{message}}
    <v-btn color="white" flat @click="deactivate">Close</v-btn>
  </v-snackbar>
</template>

<style>
</style>
