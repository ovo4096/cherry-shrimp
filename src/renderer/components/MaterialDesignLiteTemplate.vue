<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  mounted () {
    window.componentHandler.upgradeElement(this.$slots.default[0].elm)
  }
}
</script>
