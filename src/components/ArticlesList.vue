<template>
    <div>
        <ArticleItem v-for="article in articles" :key="article.publishedAt" :article="article" />
    </div>
</template>
  
<script lang='ts'>
import ArticleItem from "./ArticleItem.vue";

export default {
    name: "ArticlesList",
    data() {
        return {
            articles: [] as Articles.Article[],
        };
    },
    components: {
        ArticleItem,
    },
    async mounted() {
        // eslint-disable-next-line no-useless-catch
        try {
            const { data } = await this.axios.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=065703927c66462286554ada16a686a1');
            this.articles = data.articles;
        } catch (error) {
            throw (error)
        }
    },
};
</script>
  