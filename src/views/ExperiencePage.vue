<template>
  <div id="main">
		<div class="exp">
			<div class="exp__edu">
				<div
					class="edu__list"
					v-for="(title, index) in titles"
					:key="index"
				>
					<div class="edu__list__title">
						<h1 class="content__title">{{ title.name }}</h1>
					</div>
					<div class="content__wrapper">
						<div
							class="exp__list__contents"
							v-for="education in contents[title.slug]"
							:key="education.id"
						>
							<div
								class="exp__list__content"
								:class="education.hover ? 'exp__content-hover' : '' "
								@mouseenter="showCard(education)"
								@mouseleave="hideCard(education)"
							>
								<h3 class="content__sub__title">{{ education.type }}</h3>
								<p class="content__year" v-if="education.to.length">{{ education.from }} - {{ education.to }}</p>
								<p class="content__year" v-else>{{ education.from }}</p>
								<p class="content__place" v-if="education.major.length">{{ education.place }} - {{ education.major }}</p>
								<p class="content__place" v-else>{{ education.place }}</p>
							</div>
						</div>
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
	name: "ExperiencePage",
	components: { FooterMenu },
	data() {
		return {
			titles: [
				{
					name: 'Education',
					slug: 'educations'
				},
				{
					name: 'Achievements',
					slug: 'achievements'
				},
				{
					name: 'Work Experience',
					slug: 'experiences'
				}
			],
			contents: {
				educations: [
					{
						id: 1,
						place: "SMKN 1 Pangkalpinang",
						major: "Multimedia",
						from: "2015",
						to: "2018",
						type: "Senior High School",
						hover: false
					},
					{
						id: 2,
						place: "SMP Santo Paulus Pangkalpinang",
						major: "",
						from: "2012",
						to: "2015",
						type: "Junior High School",
						hover: false
					},
					{
						id: 3,
						place: "SD Santo Paulus 1 Pangkalpinang",
						major: "",
						from: "2006",
						to: "2012",
						type: "Elementary School",
						hover: false
					}
				],
				achievements: [
					{
						id: 1,
						place: "Bangka Belitung Province",
						major: "1st Winner",
						from: "2017",
						to: "",
						type: "LKS Web Design",
						hover: false
					},
					{
						id: 2,
						place: "Fakultas Teknik UGM",
						major: "",
						from: "2019",
						to: "",
						type: "Finalist UX Find IT!",
						hover: false
					}
				],
				experiences: [
					{
						id: 1,
						place: "PT Bank Central Asia Tbk",
						major: "",
						from: "2020",
						to: "Present",
						type: "Junior Web Developer",
						hover: false
					},
					{
						id: 2,
						place: "",
						major: "",
						from: "2020",
						to: "Present",
						type: "Part Time Freelancer",
						hover: false
					},
					{
						id: 3,
						place: "PT Technomedia Pangkalpinang",
						major: "",
						from: "2017",
						to: "",
						type: "Designer & Technician",
						hover: false
					}
				]
			}
		}
	},
	computed: {
		date(data) {
			return `${data.from} - ${data.to}`;
		}
	},
	methods: {
		showCard(item) {
			item.hover = true;
		},
		hideCard(item) {
			item.hover = false;
		},
	}
}
</script>

<style scoped>
.edu__list {
	width: calc(100%/3);
}

.exp__edu {
	display: flex;
	gap: 5rem;
}

.exp__list__contents {
	margin-left: 5rem;
	position: relative;
	cursor: pointer;
}

.exp__list__contents::before {
	content: "";
	display: inline-block;
	width: 1.5rem;
	height: 1.5rem;
	background-color: #2C5776;
	border-radius: 50%;
	position: absolute;
	left: -5rem;
	top: 50%;
	transform: translateY(-50%);
}

.exp__list__content::after {
	content: "";
	display: inline-block;
	width: 0;
	height: .3rem;
	background-color: #2C5776;
	position: absolute;
	left: -5rem;
	top: 50%;
	transform: translateY(-50%);
	transition: width .3s linear;
}

.exp__list__content.exp__content-hover::after {
	width: 5rem;
}

.exp__list__content {
	padding: 2.5rem;
	border-radius: 1rem;
	transition: color .3s linear;
}

.exp__list__content.exp__content-hover {
	background: linear-gradient(to right, var(--darkBlue), var(--darkPurple)) padding-box,
							linear-gradient(to right, var(--darkBlue), var(--darkPurple)) border-box;
	color: #FFF;
}

.exp__list__content > * {
	margin-bottom: .3rem;
}

.content__sub__title {
	font-size: 1.8rem;
}

.exp__list__content:hover .content__year {
	color: #FFF;
}

.content__year {
	font-size: 1.2rem;
	color: #777;
	transition: color .3s linear;
}

.content__wrapper { 
	display: inline-block;
}

.exp__list__contents + .exp__list__contents {
	margin-top: 2rem;
}

@media (max-width: 768px) {
	.exp__list__content {
		padding: 1.5rem;
	}

	.content__sub__title {
		font-size: 1.4rem;
	}

	.content__year,
	.content__place {
		font-size: 1.2rem;
	}

	.exp__list__content::after,
	.exp__list__contents,
	.exp__list__contents::before {
		left: -3rem;
	}

	.exp__list__content::after {
		z-index: -1;
	}

	.exp__list__contents {
		margin-left: 6rem;
	}

	.exp__edu {
		flex-direction: column;
	}

	.edu__list {
		width: 100%;
	}

	.content__wrapper {
		display: flex;
		flex-wrap: wrap;
	}
}

@media (max-width: 425px) {
	.exp__list__contents {
		width: 100%;
	}

	.exp__list__contents::before {
		width: 1rem;
		height: 1rem;
	}
}
</style>