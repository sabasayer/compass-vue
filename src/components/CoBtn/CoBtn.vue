<template>
	<button
		:disabled="loading || disabled"
		:type="type"
		class="btn"
		:class="[classes,
      {
        'btn-icon':icon,
        'btn-block':block,
        'btn-circle':circle,
        'btn-oval':oval,
        'shadow-0':noShadow,
        'btn-oval-horizontal':ovalHorizontal
      }
      ,colorClass,
      sizeClass]"
		@click="click"
	>
		<slot>
			<co-icon
				v-if="!loading && icon"
				:class="{'mr-2':!!text && icon }"
				:size="iconSize ? iconSize :size"
				:icon="icon"
			/>
			<span v-if="!loading && text" class="white-space-nowrap">{{text}}</span>
		</slot>
		<co-loading v-if="loading" type="bounce" :text="loadingText"/>
	</button>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({
	name: "co-btn"
})
export default class CoBtnComponent extends Vue {
	@Prop()
	classes: string;
	@Prop()
	icon: string;
	@Prop()
	iconSize: string;
	@Prop()
	text: string;
	@Prop()
	loading: boolean;
	@Prop()
	loadingText: string;
	@Prop({ default: "button" })
	type: string;
	@Prop()
	disabled: boolean;
	@Prop({ type: Boolean })
	block: boolean;
	@Prop()
	color: string;
	@Prop()
	size: string;
	@Prop({ type: Boolean })
	circle: boolean;
	@Prop({ type: Boolean })
	oval: boolean;
	@Prop({ type: Boolean })
	ovalHorizontal: boolean;
	@Prop({ type: Boolean })
	noShadow: boolean;

	get colorClass() {
		if (this.color) return "btn--" + this.color;
		else return "";
	}

	get sizeClass() {
		if (this.size) return "btn--" + this.size;
		else return "";
	}

	click(e: any) {
		this.$emit("click", e);
	}
}
</script>
<style lang="scss" scoped>
.btn {
	padding: 8px 12px;
    background: #f7f7f7;
    font-size: 1rem;
	position: relative;
	cursor: pointer;
	outline: none;
	&:hover{
		background-color: darken(#f7f7f7,10);
	}
	&:focus,&:active{
		background-color: darken(#f7f7f7,15);
	}
	&.btn--primary{
		background-color:#0099F2;
		color: white; 
		&:hover{
		background-color: darken(#0099F2,10);
	}
	&:focus,&:active{
		background-color: darken(#0099F2,15);
	}
	}
	&.btn--info{
		background-color:#00BFD5;
		color: white; 
	}
	&.btn--secondary{
		background-color:#292b2c;
		color: white; 
	}
	&.btn--success{
		background-color:#00B495;
		color: white; 
	}
	&.btn--warning{
		background-color:#E6DF00;
		color: white; 
	}
	&.btn--danger{
		background-color:#DF0017;
		color: white; 
	}
	&.btn-circle {
		border-radius: 50%;
		padding: 0.5rem;
	}
	&.btn-oval {
		border-radius: 1rem;
		padding: 0.75rem 0.5rem;
	}
	&.btn-oval-horizontal {
		border-radius: 2rem;
		padding: 0.25rem 0.75rem;
	}
	&.shadow-0 {
		box-shadow: none;
	}
}

.btn + .btn {
	margin-left: 0.5rem;
}
</style>