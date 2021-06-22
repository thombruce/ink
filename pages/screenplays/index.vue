<template lang='pug'>
article
  TntBlogList(:articles='articles')
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const articles = await $content('screenplays')
      .where({ draft: { $ne: true } })
      .sortBy('createdAt', 'desc')
      .fetch()
      .catch(() => {})

    return { articles }
  }
}
</script>
