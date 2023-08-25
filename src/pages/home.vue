<template>
  <Form />
  <List />
</template>

<script>
import Form from '@/components/Notes/Form.vue';
import List from '@/components/Notes/List.vue';

export default {
  components: {
    Form,
    List
  },
  beforeMount() {
    this.$store.watch(() => this.$store.getters.getNotes);
    this.$store.dispatch('searchNotes');
  },
  watch: {}
}
</script>
