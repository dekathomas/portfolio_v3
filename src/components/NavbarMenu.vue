<template>
    <div class="container">
        <ul class="menu">
            <li v-for="link in links" :key="link.id" class="menu__list" >
                <router-link  :to="{ name: `${link.name}` }" class="btn menu__item" >
                    <em :class="'fas ' + link.icon"></em> {{ link.name }}
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "NavbarMenu",
    data() {
        return {
            links: [
                {
                    id: '1',
                    name: 'Home',
                    icon: 'fa-home'
                },
                {
                    id: '2',
                    name: 'Experience',
                    icon: 'fa-star'
                },
                {
                    id: '3',
                    name: 'Project',
                    icon: 'fa-lightbulb'
                },
                {
                    id: '4',
                    name: 'Profile',
                    icon: 'fa-user'
                },
            ]
        }
    }
}
</script>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.menu {
    display: flex;
    padding: 3rem 0 5rem;
    justify-content: center;
    width: 100%;
}

.menu__item {
    cursor: pointer;
    border: .3rem solid transparent;
    border-radius: 5rem;
    background: linear-gradient(#FFF, #FFF) padding-box;
}

.menu__item:not(.menu__item-active):hover {
    background: linear-gradient(#FFF, #FFF) padding-box,
                linear-gradient(to right, var(--darkBlue), var(--darkPurple)) border-box;
}

.menu__item:not(.menu__item-active) .fas {
    display: none;
}

.menu__item.menu__item-active {
    background: linear-gradient(to right, var(--darkBlue), var(--darkPurple)) padding-box,
                linear-gradient(to right, var(--darkBlue), var(--darkPurple)) border-box;
    color: #FFF;
}

.menu__item.menu__item-active i {
    display: inline-block;
}

.menu__list {
    padding: 2rem 0;
}

.menu__list + .menu__list {
    margin-left: 2rem;
}

em {
    margin-right: .5rem;
    color: #FFF;
}

@media (max-width: 425px) {
    .menu {
        padding: 1.5rem 0;
    }

    .menu__list + .menu__list {
        margin-left: 0rem;
    }

    em {
        margin-right: 0;
    }

    .menu {
        font-size: 1.4rem;
    }
}

@media (max-width: 320px) {
    .menu {
        font-size: 1.2rem;
    }
}
</style>