<template>
  <div class="tags-list">
    <div
      class="tags-item"
      v-for="(item, index) in items"
      :key="index"
      @click="clickTag(index)"
      :class="{isPreview: isPreview, isActive: item.active && !isPreview}"
    >
      {{ item.title }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true
    },
    isActive: {
      type: Boolean,
      default: false
    },
    isPreview: {
      type: Boolean,
      default: false
      // Булевые пропы нужно писать с приставкой is
    }
  },
  methods: {
    clickTag(index) {
      this.items[index].active = !this.items[index].active;
    }
  }
}
</script>

<style lang="scss">
.tags-list {
  padding: 10px 0;
  display: flex;
  justify-content: center;
}
.tags-item {
  padding: 8px 22px;
  margin-right: 10px;
  background-color: #fff;
  border-radius: 22px;
  user-select: none;
  cursor: pointer;
  &.isActive {
    background-color: #444ce0;
    color: #fff;
  }
  &.isPreview {
    padding: 0;
    color: #444ce0;
    cursor: default;
    &:before {
      content: '#'
    }
  }
  &:last-child {
    margin-right: 0;
  }
}
</style>