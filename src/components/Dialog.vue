<script>
import { mapGetters, mapActions } from "vuex"

export default {
  name: "Dialog",
  props: {
    componentToRender: {
      default: "None",
      type: String
    }
  },
  methods: {
    ...mapActions(["closeDialog"]),
    triggerClose() {
      this.closeDialog()
    }
  },
  computed: {
    ...mapGetters(["isDialogOpen"])
  }
}
</script>

<template>
  <div class="text-xs-center">
    <v-dialog @input="triggerClose()" :value="isDialogOpen" width="700">
      <component :is="componentToRender"></component>
    </v-dialog>
  </div>
</template>