<template>
  <span :class="cls">
    <svg xmlns="http://www.w3.org/2000/svg" 
      :width="_width" 
      :height="_height"
      viewBox="<%-iconViewBox%>"
      preserveAspectRatio="xMidYMid meet"
      fill="<%-iconFill%>"
      role="presentation"
      ref="host"
    >
      <%-iconSourceTpl%>
    </svg>
  </span>
</template>

<script lang="ts">
import { Vue, prop } from 'vue-class-component';

class Props {
    width = prop<number | string>({})
    height = prop<number | string>({})
    stroke = prop<string>({})
    fill = prop<string>({})
    color = prop<string>({})
    spin = prop<boolean>({ default: false })
    rtl = prop<boolean>({ default: false })
    class?: string;
    // optional prop with default
    size = prop<number | string>({ default: '1em' })
}

export default class <%-PascalIconName%> extends Vue.with(Props) {
    get _fill(): string | undefined {
        return this.fill || this.color
    }
    get _stroke(): string | undefined {
        return this.stroke || this.color
    }
    get _width(): string | number {
      return this.width || this.size
    }
    get _height(): string | number {
      return this.height || this.size
    }
    get cls(): string {
      return [
        this.class,
        'i-icon',
        'i-icon-<%-iconCompKebabName%>',
        this.spin ? 'i-icon-spin' : '',
        this.rtl ? 'i-icon-rtl' : '',
      ].filter(Boolean).join(' ')
    }
  mounted():void {
        if (!this._fill) {
            (this.$refs.host as HTMLElement)?.querySelectorAll('[data-follow-fill]').forEach(item => {
            item.setAttribute('fill', item.getAttribute('data-follow-fill') || '')
            })
        }
        if (!this._stroke) {
            (this.$refs.host as HTMLElement)?.querySelectorAll('[data-follow-stroke]').forEach(item => {
            item.setAttribute('stroke', item.getAttribute('data-follow-stroke') || '')
            })
        }
    }
    updated():void {
        if (!this._fill) {
            (this.$refs.host as HTMLElement)?.querySelectorAll('[data-follow-fill]').forEach(item => {
            item.setAttribute('fill', item.getAttribute('data-follow-fill') || '')
            })
        }
        if (!this._stroke) {
            (this.$refs.host as HTMLElement)?.querySelectorAll('[data-follow-stroke]').forEach(item => {
            item.setAttribute('stroke', item.getAttribute('data-follow-stroke') || '')
            })
        }
    }
}
</script>
