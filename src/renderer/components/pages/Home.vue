<template>
  <div class="page-content">
    <template v-for="group in groups">
      <div class="mdl-grid">
        <div class="mdl-cell mdl-cell--12-col">
          <div class="mdl-typography--title">{{ group.name }}</div>
        </div>
      </div>
      <div class="mdl-grid">
        <div class="mdl-cell mdl-cell--12-col" ref="scrollbars">
          <div class="mdl-card-group iscroll-wrapper">
            <div class="mdl-card mdl-shadow--2dp">
              <div class="mdl-card__title mdl-card--expand">
                <h2 class="mdl-card__title-text">
                    Today's Best Music
                  </h2>
              </div>
              <div class="mdl-card__title">
                <div class="mdl-card__subtitle-text mdl-card--expand">
                  Today's Best Music
                </div>
              </div>
            </div>
            <div class="mdl-card mdl-shadow--2dp">
              <div class="mdl-card__title mdl-card--expand">
                <h2 class="mdl-card__title-text">
                    Today's Best Music
                  </h2>
              </div>
              <div class="mdl-card__title">
                <div class="mdl-card__subtitle-text mdl-card--expand">
                  Today's Best Music
                </div>
              </div>
            </div>
            <div class="mdl-card mdl-shadow--2dp">
              <div class="mdl-card__title mdl-card--expand">
                <h2 class="mdl-card__title-text">
                    Today's Best Music
                  </h2>
              </div>
              <div class="mdl-card__title">
                <div class="mdl-card__subtitle-text mdl-card--expand">
                  Today's Best Music
                </div>
              </div>
            </div>
            <div class="mdl-card mdl-shadow--2dp">
              <div class="mdl-card__title mdl-card--expand">
                <h2 class="mdl-card__title-text">
                    Today's Best Music
                  </h2>
              </div>
              <div class="mdl-card__title">
                <div class="mdl-card__subtitle-text mdl-card--expand">
                  Today's Best Music
                </div>
              </div>
            </div>
            <div class="mdl-card mdl-shadow--2dp">
              <div class="mdl-card__title mdl-card--expand">
                <h2 class="mdl-card__title-text">
                    Today's Best Music
                  </h2>
              </div>
              <div class="mdl-card__title">
                <div class="mdl-card__subtitle-text mdl-card--expand">
                  Today's Best Music
                </div>
              </div>
            </div>
            <div class="mdl-card mdl-shadow--2dp">
              <div class="mdl-card__title mdl-card--expand">
                <h2 class="mdl-card__title-text">
                    Today's Best Music
                  </h2>
              </div>
              <div class="mdl-card__title">
                <div class="mdl-card__subtitle-text mdl-card--expand">
                  Today's Best Music
                </div>
              </div>
            </div>
            <div class="mdl-card mdl-shadow--2dp">
              <div class="mdl-card__title mdl-card--expand">
                <h2 class="mdl-card__title-text">
                    Today's Best Music
                  </h2>
              </div>
              <div class="mdl-card__title">
                <div class="mdl-card__subtitle-text mdl-card--expand">
                  Today's Best Music
                </div>
              </div>
            </div>
            <div class="mdl-card mdl-shadow--2dp">
              <div class="mdl-card__title mdl-card--expand">
                <h2 class="mdl-card__title-text">
                    Today's Best Music
                  </h2>
              </div>
              <div class="mdl-card__title">
                <div class="mdl-card__subtitle-text mdl-card--expand">
                  Today's Best Music
                </div>
              </div>
            </div>
            <div class="mdl-card mdl-shadow--2dp">
              <div class="mdl-card__title mdl-card--expand">
                <h2 class="mdl-card__title-text">
                    Today's Best Music
                  </h2>
              </div>
              <div class="mdl-card__title">
                <div class="mdl-card__subtitle-text mdl-card--expand">
                  Today's Best Music
                </div>
              </div>
            </div>
            <div class="mdl-card mdl-shadow--2dp">
              <div class="mdl-card__title mdl-card--expand">
                <h2 class="mdl-card__title-text">
                    Today's Best Music
                  </h2>
              </div>
              <div class="mdl-card__title">
                <div class="mdl-card__subtitle-text mdl-card--expand">
                  Today's Best Music
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import IScroll from 'iscroll'

export default {
  data: () => ({
    groups: [
      { name: 'Recommended for You' },
      { name: 'New releases' },
      { name: 'Subscriptions' }
    ]
  }),
  mounted () {
    this._scrollbars = []
    for (let scrollbar of this.$refs.scrollbars) {
      this._scrollbars.push(new IScroll(scrollbar, { scrollX: true, scrollY: false }))
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/variables";

.iscroll-wrapper {
  position: relative;
  width: ($music-set-card-width + 16px) * 10 - 16px;
}

.page-content {
  padding: 24px 0;
}

.mdl-card-group {
  display: flex;
}

.mdl-card {
  flex: 0 0 auto;
  width: $music-set-card-width;
  height: $music-set-card-height;
  margin-right: 16px;
}

.mdl-card:last-of-type {
  margin-right: 0;
}
</style>
