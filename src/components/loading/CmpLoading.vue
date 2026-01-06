<template>
  <div class="root">
    <div class="loaderContainer">
      <h1>Loading</h1>
      <div class="dot-flashing">
        <div class="dot-1"></div>
        <div class="dot-2"></div>
        <div class="dot-3"></div>
        <div class="dot-4"></div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
// $text-color: #f5f5f5;
// $background: #0d1117;
// $dot-color-start: #161b22;
// $dot-color-end: #fff;

$text-color: var(--color-text);
$background: none;
$dot-color-start: var(--white);
$dot-color-end: var(--primary-color);

@keyframes dot-flashing {
  0% {
    background-color: $dot-color-start;
  }

  100% {
    background-color: $dot-color-end;
  }
}

.root {
  height: 100%;
  background-color: $background;
  display: flex;

  & h1 {
    color: $text-color;
    text-align: center;
  }
}

.loaderContainer {
  padding: 1.5625rem 1.25rem;
  align-self: center;
  margin: 0 auto;
  width: 21.875rem;
  border-radius: 0.3125rem;

  & .dot-flashing {
    position: relative;
    margin: 0 auto;
    width: 100%;
    height: 100%;
    display: inline-flex;
    column-gap: 0.625rem;
    justify-content: center;

    & .dot-1 {
      width: 0.625rem;
      height: 0.625rem;
      border-radius: 0.3125rem;
      background-color: $dot-color-start;
      color: $dot-color-start;
      animation: dot-flashing 0.5s infinite alternate;
      animation-delay: 0.1s;
    }

    & .dot-2 {
      width: 0.625rem;
      height: 0.625rem;
      border-radius: 0.3125rem;
      background-color: $dot-color-start;
      color: $dot-color-start;
      animation: dot-flashing 0.5s infinite alternate;
      animation-delay: 0.2s;
    }

    & .dot-3 {
      width: 0.625rem;
      height: 0.625rem;
      border-radius: 0.3125rem;
      background-color: $dot-color-start;
      color: $dot-color-start;
      animation: dot-flashing 0.5s infinite alternate;
      animation-delay: 0.3s;
    }

    & .dot-4 {
      width: 0.625rem;
      height: 0.625rem;
      border-radius: 0.3125rem;
      background-color: $dot-color-start;
      color: $dot-color-start;
      animation: dot-flashing 0.5s infinite alternate;
      animation-delay: 0.4s;
    }
  }
}
</style>
