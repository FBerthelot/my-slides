<template>
  <svg viewBox="0 0 200 28">
    <path id="path" d="m0,28 h200">
      <animate
        attributeName="d"
        from="m0,28 h0"
        to="m0,28 h0"
        dur="3s"
        begin="0s"
        repeatCount="1"
      />
      <animate
        attributeName="d"
        from="m0,28 h0"
        to="m0,28 h200"
        dur="3s"
        begin="3s"
        repeatCount="1"
      />
    </path>
    <text font-size="14" y="0" fill="white">
      <textPath xlink:href="#path">
        Love you miss Quinn &hearts;
      </textPath>
    </text>
  </svg>
</template>

<style scoped></style>
