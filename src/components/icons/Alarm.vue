<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="_width"
    :height="_height"
    :spin="spin"
    :rtl="rtl"
    viewBox="0 0 48 48"
    preserveAspectRatio="xMidYMid meet"
    fill="none"
    role="presentation"
    ref="host"
  >
    <g>
      <path fill-opacity=".01" fill="#fff" d="M0 0h48v48H0z" />
      <path
        stroke-linejoin="bevel"
        stroke-width="3"
        stroke="#221225"
        fill="#7ed321"
        d="M14 25c0-5.523 4.477-10 10-10s10 4.477 10 10v16H14V25Z"
      />
      <path
        stroke-linejoin="bevel"
        stroke-linecap="round"
        stroke-width="3"
        stroke="#221225"
        d="M24 5v3m11.892 1.328-1.929 2.298m8.256 8.662-2.955.52m-33.483-.52 2.954.52m3.373-11.48 1.929 2.298M6 41h37"
      />
    </g>
  </svg>
</template>

<script lang="ts">
import { Vue, prop } from "vue-class-component";

class Props {
  width?: number | string;
  height?: number | string;
  stroke?: string;
  fill?: string;
  color?: string;
  spin?: boolean;
  rtl?: boolean;

  // optional prop with default
  size = prop<number | string>({ default: "1em" });
}

export default class Alarm extends Vue.with(Props) {
  get _fill(): string | undefined {
    return this.fill || this.color;
  }
  get _stroke(): string | undefined {
    return this.stroke || this.color;
  }
  get _width(): string | number {
    return this.width || this.size;
  }
  get _height(): string | number {
    return this.height || this.size;
  }
  mounted(): void {
    if (!this._fill) {
      (this.$refs.host as HTMLElement)
        ?.querySelectorAll("[data-follow-fill]")
        .forEach(item => {
          item.setAttribute(
            "fill",
            item.getAttribute("data-follow-fill") || ""
          );
        });
    }
    if (!this._stroke) {
      (this.$refs.host as HTMLElement)
        ?.querySelectorAll("[data-follow-stroke]")
        .forEach(item => {
          item.setAttribute(
            "stroke",
            item.getAttribute("data-follow-stroke") || ""
          );
        });
    }
  }
  updated(): void {
    if (!this._fill) {
      (this.$refs.host as HTMLElement)
        ?.querySelectorAll("[data-follow-fill]")
        .forEach(item => {
          item.setAttribute(
            "fill",
            item.getAttribute("data-follow-fill") || ""
          );
        });
    }
    if (!this._stroke) {
      (this.$refs.host as HTMLElement)
        ?.querySelectorAll("[data-follow-stroke]")
        .forEach(item => {
          item.setAttribute(
            "stroke",
            item.getAttribute("data-follow-stroke") || ""
          );
        });
    }
  }
}
</script>

<style scoped>
svg[spin="true"] {
  animation: iconpark-spin 1s infinite linear;
}
svg[spin="true"][rtl="true"] {
  animation: iconpark-spin-rtl 1s infinite linear;
}
svg[rtl="true"] {
  transform: scaleX(-1);
}
@keyframes iconpark-spin {
  0% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes iconpark-spin-rtl {
  0% {
    -webkit-transform: scaleX(-1) rotate(0);
    transform: scaleX(-1) rotate(0);
  }
  100% {
    -webkit-transform: scaleX(-1) rotate(360deg);
    transform: scaleX(-1) rotate(360deg);
  }
}
</style>
