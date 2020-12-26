<template>
  <div id="main">
		<div class="project__list">
			<div class="project__content" v-for="project in projects" :key="project.id">
				<a :href="project.link" target="_blank">
					<div class="project__image">
						<img :src="require('../assets/projectImage/' + project.image)" alt="">
					</div>
					<div class="project__detail">
						<div class="project__name">
							<p>{{ project.name }}</p>
						</div>
						<div class="project__tags">
							<p class="tag" v-for="(tag, index) in project.tag" :key="index">{{ tag }}</p>
						</div>
					</div>
				</a>
			</div>
		</div>
		<FooterMenu></FooterMenu>
	</div>
</template>

<script>
import FooterMenu from '@/components/FooterMenu'

export default {
	name: "ProjectPage",
	components: { FooterMenu },
	data() {
		return {
			projects: [
				{
					id: 1,
					name: "Pokemon Memory Card Game",
					tag: ["HTML", "CSS", "JavaScript"],
					link: "https://dekathomas.github.io/pokemon-memory-game/",
					image: "pokemon.png"
				},
				{
					id: 2,
					name: "Speed Typing Game",
					tag: ["HTML", "CSS", "JavaScript"],
					link: "https://dekathomas.github.io/speed_typing_game/",
					image: "speed.png"
				},
				{
					id: 3,
					name: "Frontend Mentor",
					tag: ["HTML", "CSS"],
					link: "https://dekathomas.github.io/frontend-mentor/article-preview-component-master/",
					image: "frontendmentor.png"
				},
				{
					id: 4,
					name: "Avengers Cinema Seat",
					tag: ["HTML", "CSS", "JavaScript"],
					link: "http://dekathomas.github.io/avengers_cinema",
					image: "cinema.png"
				},
			]
		}
	}
}
</script>

<style scoped>
.project__list {
	width: 80%;
	margin: 0 auto;
	display: flex;
	gap: 1rem;
	flex-wrap: wrap;
	justify-content: space-between;
}

.project__content {
	width: 32%;
	position: relative;
	cursor: pointer;
	margin-bottom: 2rem;
}

.project__content::after {
	content: "";
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	z-index: -1;
	display: block;
	opacity: 0;
	position: absolute;
	background: #F8F8F8;
	box-shadow: .5rem .7rem .5rem -.3rem rgba(0, 0, 0, .3);
	transition: opacity .3s linear;
}

.project__content:hover::after {
	opacity: 1;
}

.project__image {
	width: 100%;
	padding-bottom: 56.5%;
	position: relative;
}

.project__image img {
	position: absolute;
	width: 100%;
	height: 100%;
	object-fit: cover;
}

.project__detail {
	padding: 1.3rem;
}

.project__name {
	font-weight: bold;
	margin-bottom: .3rem;
}

.tag {
	display: inline-block;
	color: #777;
	font-size: 1.2rem;
}

.tag + .tag {
	margin-left: .5rem;
	padding-left: .5rem;
	border-left: 1px solid #777;
}

a {
	display: block;
}

@media (max-width: 768px) {
	.project__list {
		width: 100%;
	}
}

@media (max-width: 425px) {
	.project__content {
		width: 100%;
	}
}
</style>