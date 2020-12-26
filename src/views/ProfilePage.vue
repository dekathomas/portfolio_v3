<template>
  <div class="main">
		<div class="profile">
			<div class="profile__left">
				<div class="profile__image">
					<div class="image">
						<div class="img"></div>
						<div class="icons">
							<p class="icon" v-for="hobby in hobbies" :key="hobby.id" @mouseenter="showIcon(hobby)" @mouseleave="hideIcon(hobby)">
								{{ hobby.icon }}
								<span class="icon__name" v-if="hobby.hover">{{ hobby.name }}</span>
							</p>
						</div>
					</div>
					<div class="profile__description">
						<p>Currently love Vue and Laravel</p>
					</div>
				</div>
			</div>
			<div class="profile__right">
				<!-- Biography Section -->
				<div class="profile__bio">
					<div class="bio__title">
						<h1 class="content__title">Biography</h1>
					</div>
					<div class="profile__contents">
						<div
							class="profile__content bio__content"
							v-for="bio in biography"
							:key="bio.id"
						>
							<p class="profile__title">{{ bio.title }}</p>
							<p class="profile__body">{{ bio.body }}</p>
						</div>
					</div>
				</div>
				<!-- Skills Section -->
				<div class="skills__bio">
					<div class="skills__title">
						<h1 class="content__title">Skills</h1>
					</div>
					<div class="profile__contents">
						<div class="profile__content skill__content" v-for="skill in skills" :key="skill.id">
							<a :href="skill.link" target="_blank" class="skill_link">
								<div class="skill__image">
									<img :src="require(`@/assets/${skill.icon}`)" :alt="skill.alt">
								</div>
								<p class="skill__name">{{ skill.name }}</p>
							</a>
						</div>
					</div>
				</div>
				<!-- Connect Section -->
				<div class="connect__bio">
					<div class="connect__title">
						<h1 class="content__title">Connect with me</h1>
					</div>
					<div class="profile__contents">
						<a
							a :href="connect.link"
							target="_blank"
							class="profile__content connect__content"
							:style="connect.hover ? {backgroundColor: connect.color, color: '#FFF'} : ''"
							v-for="connect in connects"
							:key="connect.id"
							@mouseenter="connect.hover = true"
							@mouseleave="connect.hover = false"
						>
							<div class="connect__image">
								<img
									:src="connect.image"
									:alt="connect.name"
									:style="connect.name === 'Fastwork' && connect.hover ? {filter: 'brightness(0) invert(1)'} : ''"
								>
							</div>
							<p class="connect__name">{{ connect.name }}</p>
						</a>
					</div>
				</div>
			</div>
		</div>
		<FooterMenu></FooterMenu>
	</div>
</template>

<script>
import FooterMenu from '@/components/FooterMenu'

export default {
	name: "ProfilePage",
	components: { FooterMenu },
	data() {
		return {
			hobbies: [
				{ id: 1, name: "Basketball", icon: "🏀", hover: false },
				{ id: 2, name: "Programming", icon: "💻", hover: false },
				{ id: 3, name: "Photography", icon: "📷", hover: false }
			],
			biography: [
				{ id: 1, title: "Name", body: "Deka Thomas" },
				{ id: 2, title: "Birthdate", body: "23 December 2000" },
				{ id: 3, title: "Language", body: "Indonesia, English" }
			],
			skills: [
				{ id: 1, name: "Vue", icon: "logo.png", alt: "Vue Image", link: "https://vuejs.org/" },
				{ id: 2, name: "Angular", icon: "angular.png", alt: "Angular Image", link: "https://angular.io/" },
				{ id: 3, name: "Laravel", icon: "laravel.png", alt: "Laravel Image", link: "http://laravel.com/" },
				{ id: 4, name: "JavaScript", icon: "js.png", alt: "JavaScript Image", link: "https://developer.mozilla.org/id/docs/Web/JavaScript" },
				{ id: 5, name: "PHP", icon: "php.svg", alt: "PHP Image", link: "https://www.php.net/" },
				{ id: 6, name: "TypeScript", icon: "ts.png", alt: "TypeScript Image", link: "https://www.typescriptlang.org/" },
				{ id: 7, name: "Sass", icon: "sass.png", alt: "Sass Image", link: "https://sass-lang.com/" },
				{ id: 8, name: "HTML", icon: "html.png", alt: "HTML Image", link: "https://developer.mozilla.org/id/docs/Web/HTML" },
				{ id: 9, name: "CSS", icon: "css.png", alt: "CSS Image", link: "https://developer.mozilla.org/id/docs/Web/CSS" },
				{ id: 10, name: "Spring", icon: "spring.png", alt: "Spring Image", link: "https://spring.io/" },
				{ id: 11, name: "MySQL", icon: "mysql.png", alt: "MySQL Image", link: "https://www.mysql.com/" },
				{ id: 12, name: "Postgres", icon: "postgres.png", alt: "PostgreSQL Image", link: "https://www.postgresql.org/" }
			],
			connects: [
				{
					id: 1,
					name: "Projects",
					link: "https://projects.co.id/public/browse_users/view/378619/dekathomas",
					image: "https://cdn.projects.co.id/assets/img/favicon.ico",
					color: "#F68E20",
					hover: false
				},
				{
					id: 2,
					name: "Fastwork",
					link: "https://fastwork.id/user/dekathomas",
					image: "https://fastwork.id/static-v4/favicons/favicon.ico",
					color: "#4782E1",
					hover: false
				},
				{
					id: 3,
					name: "Upwork",
					link: "https://www.upwork.com/freelancers/~019a8778d046fbe3ae?viewMode=1",
					image: "https://www.upwork.com/favicon.ico",
					color: "#5BBC2E",
					hover: false
				},
				{
					id: 4,
					name: "Sribulancer",
					link: "https://www.sribulancer.com/id/users/dekathomas23",
					image: "https://www.sribulancer.com/favicons/favicon.ico?v=2",
					color: "#1688D1",
					hover: false
				},
			]
		}
	},
	methods: {
		showIcon(hobby) {
			hobby.hover = true
		},
		hideIcon(hobby) {
			hobby.hover = false
		}
	}
}
</script>

<style scoped>
.profile {
	display: flex;
	gap: 5rem;
}

.profile__left {
	width: calc(1/5*100%);
}

.img {
	width: 100%;
	padding-bottom: 100%;
	background-image: url('../assets/profile.jpg');
	background-size: cover;
}

.image {
	position: relative;
	border-radius: 1rem;
	overflow: hidden;
}

.profile__image img {
	width: 100%;
	border-radius: 1rem;
}

.profile__description {
	margin-top: 1rem;
}

.icons {
	position: absolute;
	bottom: 1rem;
	left: 1rem;
	display: flex;
	gap: .5rem;
}

.icon {
	padding: .5rem;
	background-color: #FFF;
	border-radius: 2rem;
	cursor: pointer;
	overflow: hidden;
	display: inline-block;
	font-size: 1.2rem;
}

.profile__right {
	width: 100%;
}

.profile__right > div + div {
	margin-top: 5rem;
	padding-top: 5rem;
	border-top: .2rem solid #777;
}

.bio__content {
	flex: 1;
}

.profile__contents {
	display: flex;
	gap: 1rem;
	flex-wrap: wrap;
}

.profile__title {
	color: #777;
	font-size: 1.6rem;
}

.profile__body {
	font-weight: bold;
}

.skill__content {
	background-color: #EEE;
	padding: 1rem;
	width: 10rem;
	cursor: pointer;
	transition: transform .2s ease-in;
}

.skill__content:hover {
	transform: translateY(-1rem);
}

.skill__image {
	width: 100%;
	height: 8rem;
}

.skill__content img {
	width: 100%;
	height: 100%;
	object-fit: contain;
}

.skill__name {
	font-size: 1.2rem;
	text-align: center;
	padding-top: 1rem;
}

.skill__link {
	display: inline-block;
}

.connect__content {
	background: #EEE;
	padding: 2rem;
	border-radius: 1rem;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
}

.connect__image {
	width: 3rem;
	height: 3rem;
	border-radius: 5rem;
	margin-right: 1rem;
}

.connect__image img {
	width: 100%;
}

/* iPad Pro */
@media (max-width: 1024px) {
	.profile__left {
		width: calc(1/3*100%);
	}
}

/* iPad */
@media (max-width: 768px) {
	.profile__left {
		width: calc(1/2*100%);
	}

	.skill__content {
		width: 7rem;
	}

	.skill__name {
		padding-top: 0;
	}
}

/* Mobile L */
@media (max-width: 425px) {
	.profile,
	.profile__bio .profile__contents {
		flex-direction: column;
	}

	.skills__bio .profile__contents {
		justify-content: space-between;
	}

	.profile__left {
		width: 100%;
		/* text-align: center; */
	}

	.skill__content {
		width: 8rem;
	}

	.connect__bio .profile__contents {
		display: flex;
		justify-content: space-between;
	}

	.connect__bio .profile__contents > a {
		flex: 1;
	}
}

/* Mobile M */
@media (max-width: 375px) {
	.skills__bio .profile__contents {
		gap: 0;
	}

	.skill__content {
		width: 8rem;
		margin-bottom: 1rem;
	}
}

/* Mobile S */
@media (max-width: 320px) {
	.skill__content {
		width: 9rem;
	}

	.connect__bio .profile__contents > a {
		width: 100%;
	}

	.connect__image {
		width: 2rem;
		height: 2rem;
	}
}
</style>