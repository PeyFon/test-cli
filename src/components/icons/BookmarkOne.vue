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
        stroke-linecap="round"
        stroke-width="3"
        stroke="#221225"
        d="M34 10V4H8v34l6-3"
      />
      <path
        stroke-linejoin="bevel"
        stroke-width="3"
        stroke="#221225"
        fill="#7ed321"
        d="M14 44V10h26v34l-13-6.273L14 44Z"
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

export default class BookmarkOne extends Vue.with(Props) {
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
