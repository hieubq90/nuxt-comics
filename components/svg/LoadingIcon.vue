<template>
  <svg class="loading-icon" viewBox="0 0 200 200" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="pl-grad1" x1="1" y1="0.5" x2="0" y2="0.5">
        <stop offset="0%" stop-color="#22c55e" />
        <stop offset="100%" stop-color="#3b82f6" />
      </linearGradient>
      <linearGradient id="pl-grad2" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#22c55e" />
        <stop offset="100%" stop-color="#3b82f6" />
      </linearGradient>
    </defs>
    <circle
      class="loading-icon__ring" cx="100" cy="100" r="82" fill="none" stroke="url(#pl-grad1)" stroke-width="36"
      stroke-dasharray="0 257 1 257" stroke-dashoffset="0.01" stroke-linecap="round" transform="rotate(-90,100,100)"
    />
    <line
      class="loading-icon__ball" stroke="url(#pl-grad2)" x1="100" y1="18" x2="100.01" y2="182" stroke-width="36"
      stroke-dasharray="1 165" stroke-linecap="round"
    />
  </svg>
</template>

<style lang="scss" scoped>
.loading-icon {
  display: block;
  width: 6.25em;
  height: 6.25em;

  &__ring {
    animation: ring 2s ease-out infinite;
  }

  &__ball {
    animation: ball 2s ease-out infinite;
  }
}

@keyframes ring {
  from {
    stroke-dasharray: 0 257 0 0 1 0 0 258;
  }

  25% {
    stroke-dasharray: 0 0 0 0 257 0 258 0;
  }

  50%,
  to {
    stroke-dasharray: 0 0 0 0 0 515 0 0;
  }
}

@keyframes ball {
  from,
  50% {
    animation-timing-function: ease-in;
    stroke-dashoffset: 1;
  }

  64% {
    animation-timing-function: ease-in;
    stroke-dashoffset: -109;
  }

  78% {
    animation-timing-function: ease-in;
    stroke-dashoffset: -145;
  }

  92% {
    animation-timing-function: ease-in;
    stroke-dashoffset: -157;
  }

  57%,
  71%,
  85%,
  99%,
  to {
    animation-timing-function: ease-out;
    stroke-dashoffset: -163;
  }
}
</style>
