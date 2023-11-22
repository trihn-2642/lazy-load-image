<template>
    <article class="article-item">
        <header>
            <h1>{{ article.title }}</h1>
            <p v-if="article.author">
                By <span>{{ article.author }}</span>
            </p>
        </header>

        <section class="article-item__content">
            <p class="article-item__description">
                {{ article.description }}
            </p>
            <ImageItem class="article-item__image" v-if="article.urlToImage" :source="article.urlToImage" />
        </section>

        <footer>
            <a :href="article.url">Link</a>
        </footer>
    </article>
</template>
  
<script lang="ts">
import type { PropType } from "vue";
import ImageItem from "./ImageItem.vue";

export default {
    components: {
        ImageItem
    },
    props: {
        article: {
            type: Object as PropType<Articles.Article>,
            required: true
        }
    }
};
</script>
  
<style lang="scss" scoped>
.article-item {
    padding: 40px 10px;
    border-bottom: 1px solid #000;

    &__content {
        display: flex;
    }

    &__description {
        font-size: 14px;
        width: 50%;
    }

    &__image {
        width: 50%;
    }
}
</style>
  