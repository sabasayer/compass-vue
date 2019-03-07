<template>
    <svg class="icon" :class="[colorClass,size,{'circle':circle}]">
		<use v-bind="{'xlink:href':'#'+icon}"></use>
	</svg>
</template>
<script lang="ts">
import {Vue,Component,Prop} from 'vue-property-decorator'

@Component({
    name:'co-icon'
})
export default class CoIconComponent extends Vue{
    @Prop()
	icon: string;
	@Prop()
	color: string;
	@Prop()
	size: string;
	@Prop({ type: Boolean })
    circle: boolean;
    
	get colorClass() {
		return this.color ? "text-" + this.color : "";
	}
}
</script>
