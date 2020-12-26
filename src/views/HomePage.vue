<template>
    <div class="main">
        <div class="main__content">
            <div class="quote">
                <h1 :class="quote ? '' : 'animation'">{{ quote ? quote : 'Loading...' }}</h1>
                <p class="author">{{ author }}</p>
            </div>
        </div>
        <SocialMedia></SocialMedia>
    </div>
</template>

<script>
import SocialMedia from '@/components/SocialMedia'
import axios from 'axios'

export default {
    name: "HomePage",
    components: {
        SocialMedia
    },
    data() {
        return {
            categories: null,
            quote: null,
            author: null
        }
    },
    methods: {
        async getCategory() {
            return axios.get('https://quotes.rest/qod/categories?language=en&detailed=false')
                .then(res => {
                    this.categories = Object.keys(res.data.contents.categories)
                    if (res.status === 200) return this.categories[Math.floor(Math.random()*7)]
                })
                .catch(() => {
                    return 400
                })
        },
        async getQuote(category) {
            return axios.get(`https://quotes.rest/qod?category=${category}&language=en`)
                .then (res => {
                    return res
                })
                .catch(() => {
                    return 400
                })
        },
        defaultQuote() {
            this.quote = "Never underestimates your self till you die"
            this.author = "- Deka Thomas"
        }
    },
    async mounted() {
        let category = await this.getCategory();
        if (category !== 400) {
            let response = await this.getQuote(category)

            if (response === 400) {
                this.defaultQuote()
            }
            
            this.quote = response.data.contents.quotes[0].quote
            this.author = "- " + response.data.contents.quotes[0].author
        } else {
            this.defaultQuote()
        }
    }
}
</script>

<style scoped>
.main__content {
    width: 100%;
    height: 70vh;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}

.quote {
    max-width: 80%;
    position: relative;
}

.quote::before,
.quote::after {
    content: "''";
    display: block;
    position: absolute;
    font-family: 'Beth Ellen';
    font-size: 6rem;
    line-height: 0;
    color: #777;
}

.quote::after {
    bottom: -1rem;
    right: -4rem;
}

.quote::before {
    transform: scale(-1, 1);
    top: 1.5rem;
    left: -4rem;
}

h1 {
    font-weight: 100;
    font-size: 1.8rem;
    text-align: justify;
}

.author {
    text-align: right;
    font-style: italic;
    margin-top: .5rem;
}

.animation {
    animation-name: blink;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-fill-mode: forwards;
}

@keyframes blink {
    0% { opacity: 1 }
    50% { opacity: .5 }
    100% { opacity: 1 }
}

@media (max-width: 425px) {
    h1 {
        font-size: 1.2rem;
    }

    .author {
        font-size: 1rem;
    }
}
</style>