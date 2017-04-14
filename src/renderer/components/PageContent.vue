<template>
  <div class="page-content">
    <div class="mdl-grid">
      <div class="mdl-cell mdl-cell--12-col">
        <h5 class="no-margin">Recommended for You</h5>
      </div>
    </div>
    <div class="mdl-grid roll"
         ref="recommendRollbar">
      <div class="mdl-cell mdl-cell--12-col clearfix roll-container">
        <div class="album-card mdl-card mdl-shadow--2dp"></div>
        <div class="album-card mdl-card mdl-shadow--2dp"></div>
        <div class="album-card mdl-card mdl-shadow--2dp"></div>
        <div class="album-card mdl-card mdl-shadow--2dp"></div>
        <div class="album-card mdl-card mdl-shadow--2dp"></div>
        <div class="album-card mdl-card mdl-shadow--2dp"></div>
        <div class="album-card mdl-card mdl-shadow--2dp"></div>
        <div class="album-card mdl-card mdl-shadow--2dp"></div>
      </div>
    </div>
    <div class="mdl-grid">
      <div class="mdl-cell mdl-cell--12-col">
        <h5 class="no-margin">New releases</h5>
      </div>
    </div>
    <div class="mdl-grid roll"
         ref="newRollbar">
      <div class="mdl-cell mdl-cell--12-col clearfix roll-container">
        <div class="album-card mdl-card mdl-shadow--2dp"></div>
        <div class="album-card mdl-card mdl-shadow--2dp"></div>
        <div class="album-card mdl-card mdl-shadow--2dp"></div>
        <div class="album-card mdl-card mdl-shadow--2dp"></div>
        <div class="album-card mdl-card mdl-shadow--2dp"></div>
        <div class="album-card mdl-card mdl-shadow--2dp"></div>
        <div class="album-card mdl-card mdl-shadow--2dp"></div>
        <div class="album-card mdl-card mdl-shadow--2dp"></div>
      </div>
    </div>
    <div class="mdl-grid">
      <div class="mdl-cell mdl-cell--12-col">
        <h5 class="no-margin">Subscriptions</h5>
      </div>
    </div>
    <div class="mdl-grid roll"
         ref="subscriptionRollbar">
      <div class="mdl-cell mdl-cell--12-col clearfix roll-container">
        <div class="album-card mdl-card mdl-shadow--2dp"></div>
        <div class="album-card mdl-card mdl-shadow--2dp"></div>
        <div class="album-card mdl-card mdl-shadow--2dp"></div>
        <div class="album-card mdl-card mdl-shadow--2dp"></div>
        <div class="album-card mdl-card mdl-shadow--2dp"></div>
        <div class="album-card mdl-card mdl-shadow--2dp"></div>
        <div class="album-card mdl-card mdl-shadow--2dp"></div>
        <div class="album-card mdl-card mdl-shadow--2dp"></div>
      </div>
    </div>
  </div>
</template>

<script>
import IScroll from 'iscroll'

export default {
  mounted () {
    this._scrollbar = []
    this._scrollbar.push(new IScroll(this.$refs.recommendRollbar, { scrollX: true, scrollY: false }))
    this._scrollbar.push(new IScroll(this.$refs.newRollbar, { scrollX: true, scrollY: false }))
    this._scrollbar.push(new IScroll(this.$refs.subscriptionRollbar, { scrollX: true, scrollY: false }))
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/variables";

.album-card.mdl-card {
  width: $roll-card-height;
  height: $roll-card-height;
  background: $layout-header-bg-color;
  margin-right: 8px;
  float: left;
}

.album-card.mdl-card:last-of-type {
  margin-right: 0;
}

.roll {
  position: relative;
  height: $roll-card-height + 16px;
}

.roll-container {
  top: 8px;
  left: 8px;
  position: absolute;
  z-index: 1;
  width: 2136px;
  transform: translateZ(0);
  user-select: none;
}

.no-margin {
  margin: 0;
}

.page-content {
  padding: 24px 0;
}
</style>
