import Vue, { Component, PluginFunction, PluginObject, VueConstructor, DirectiveFunction, DirectiveOptions } from 'vue'

declare const CompassUI:CompassUI
export default CompassUI
export interface CompassUI {
    install: PluginFunction<any>
}

