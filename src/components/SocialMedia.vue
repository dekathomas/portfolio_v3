<template>
    <div class="main">
        <ul class="icons">
            <li v-for="(item, index) in socialMedia"
                :key="index" 
                class="icons__item"
            >
                <a :href="links[index]" target="_blank">
                    <em :class="item"></em>
                    <div class="ripple-background"></div>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "SocialMedia",
    data() {
        return {
            socialMedia: [
                'facebook fab fa-facebook-square', 
                'twitter fab fa-twitter-square',
                'github fab fa-github-square', 
                'instagram fab fa-instagram',
                'linkedin fab fa-linkedin'
            ],
            links: [
                'https://web.facebook.com/profile.php?id=100002959924143',
                'https://twitter.com/deka_thomas',
                'https://github.com/dekathomas',
                'https://www.instagram.com/deka_thomas/',
                'https://www.linkedin.com/in/deka-thomas-279817152/'
            ]
        }
    },
    methods: {
        
    }
}
</script>

<style scoped>
.main {
    padding: 2rem 0;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
}

.icons {
    display: flex;
}

.icons__item {
    cursor: pointer;
    position: relative;
}

.icons__item + .icons__item {
    margin-left: 5rem;
}

.icons__item > * {
    font-size: 3.6rem;
}

.ripple-background {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
    border-radius: 5rem;
}

.facebook {
    background: var(--facebook);
    background-clip: text;
    -webkit-text-fill-color: transparent;
}

.linkedin {
    color: var(--linkedin);
}

.github {
    color: var(--github);
}

.instagram {
    background: var(--instagram);
    background-clip: text;
    -webkit-text-fill-color: transparent;
}

.twitter {
    color: var(--twitter);
}

@media (max-width: 425px) {
    .icons__item + .icons__item {
        margin-left: 2rem;
    }
}
</style>