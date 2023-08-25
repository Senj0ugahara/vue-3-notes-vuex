<template>
  <div class="note-form__wrapper">
    <form class="note-form" @submit.prevent="onSubmit">
      <textarea
        required
        v-model="value"
        placeholder="Type ur note"
      />
      <TagsList :items="tags" isActive />
      <button class="btn btnPrimary" type="submit">Add new note</button>
    </form>
  </div>
</template>

<script>
import TagsList from '@/components/UI/TagsList.vue';

export default {
  components: { TagsList },
  data() {
    return {
      value: '',
      tags: [
        {
          title: 'home',
          active: false
        },
        {
          title: 'work',
          active: false
        },
        {
          title: 'travel',
          active: false
        }
      ]
    }
  },
  methods: {
    onSubmit() {
      const activeTags = this.tags.filter(el => el.active === true);
      const currentNote = {
        title: this.value,
        tags: activeTags
      }
      this.$store.dispatch('submitNote', currentNote);
      this.value = '';
      this.tags = this.tags.map(el => ({
        ...el,
        active: el.active === true ? el.active === false : el.active
      }));
    }
  }
}
</script>

<style lang="scss">
.note-form__wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.note-form {
  max-width: 600px;
  width: 100%;
  display: flex;
  flex-direction: column;
  textarea {
    margin-bottom: 0;
  }
}
</style>