<template>
	<div>
		<div class="loader" v-if="type=='ellipses'" :class="{'absolute':absolute}">
			<div class="loader--dot"></div>
			<div class="loader--dot"></div>
			<div class="loader--dot"></div>
			<div class="loader--dot"></div>
			<div class="loader--dot"></div>
			<div class="loader--dot"></div>
			<div class="loader--text" v-if="text">{{text}}</div>
		</div>
		<div v-else class="d-flex align-items-center justify-content-center">
			<div class="loader-spin"></div>
			<div class="loader-spin__text ml-3" v-if="text">{{text}}</div>
		</div>
	</div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class CoLoadingComponent extends Vue {
	@Prop()
	text: string;

	@Prop()
	absolute: boolean;

	@Prop({ default: "ellipses" })
	type: string;
}
</script>

<style lang="scss" scoped>
$loader--width: 250px;
$loader-dot--size: 20px;
.loader {
	height: $loader-dot--size;
	width: $loader--width;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	margin: auto;
	&.absolute {
		position: absolute;
		.loader--text {
			position: absolute;
			top: 200%;
		}
	}
	.loader--text {
		top: 0;
		left: 0;
		right: 0;
		width: 4rem;
		margin: auto;
	}
}
.loader--dot {
	animation-name: loader;
	animation-timing-function: ease-in-out;
	animation-duration: 2s;
	animation-iteration-count: infinite;
	height: $loader-dot--size;
	width: $loader-dot--size;
	border-radius: 100%;
	background-color: black;
	position: absolute;
	border: 2px solid white;
	&:first-child {
		background-color: #8cc759;
		animation-delay: 0.5s;
	}

	&:nth-child(2) {
		background-color: #8c6daf;
		animation-delay: 0.4s;
	}

	&:nth-child(3) {
		background-color: #ef5d74;
		animation-delay: 0.3s;
	}

	&:nth-child(4) {
		background-color: #f9a74b;
		animation-delay: 0.2s;
	}

	&:nth-child(5) {
		background-color: #60beeb;
		animation-delay: 0.1s;
	}

	&:nth-child(6) {
		background-color: #fbef5a;
		animation-delay: 0s;
	}
}

@keyframes loader {
	15% {
		transform: translateX(0);
	}

	45% {
		transform: translateX($loader--width - $loader-dot--size);
	}

	65% {
		transform: translateX($loader--width - $loader-dot--size);
	}

	95% {
		transform: translateX(0);
	}
}

.loader-spin {
	border: 2px solid currentColor;
	border-top: 2px solid transparent;
	border-radius: 50%;
	width: 20px;
	height: 20px;
	animation: spin 2s linear infinite;
}

@keyframes spin {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}
</style>
