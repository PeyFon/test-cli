<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="_width"
    :height="_height"
    :spin="spin"
    :rtl="rtl"
    viewBox="0 0 48 48"
    preserveAspectRatio="xMidYMid meet"
    fill=""
    role="presentation"
    ref="host"
  >
    <g>
      <path
        fill-rule="evenodd"
        fill-opacity=".01"
        fill="#fff"
        d="M0 0h48v48H0z"
      />
      <g stroke-width="3" stroke-linejoin="bevel">
        <path
          fill="#7ed321"
          stroke="#221225"
          d="M24 42c12 0 14-10.468 14-14V14H10v14c0 3.45 2 14 14 14Z"
        />
        <path
          fill="none"
          stroke-linecap="round"
          stroke="#221225"
          d="m4 8 6 6m34-6-6 6M4 27h6m34 0h-6M7 44l6-6m28 6-6-6"
        />
        <path
          fill="none"
          stroke-linecap="round"
          stroke="#c05858"
          d="M24 42V14"
        />
        <path
          fill="none"
          stroke-linecap="round"
          stroke="#221225"
          d="M14.92 39.04C17.002 40.784 19.925 42 24 42h0c4.111 0 7.049-1.229 9.134-2.986"
        />
        <path
          fill="#7ed321"
          stroke="#221225"
          d="M32 12.333C32 7.731 28.418 4 24 4s-8 3.731-8 8.333V14h16v-1.667Z"
        />
      </g>
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

export default class Bug extends Vue.with(Props) {
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
