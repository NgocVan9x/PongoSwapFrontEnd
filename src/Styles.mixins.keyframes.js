import { keyframes } from 'styled-components';

// Bounsing Loader
export function bouncingLoader() {
  const bouncingLoader = keyframes`
    from {
      opacity: 1;
      transform: translateY(.5em);
    }
    to {
      opacity: 0.2;
      transform: translateY(0);
    }
  `;
  return bouncingLoader;
}

// Spinning Disk
export function spinning() {
  const spinning = keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  `;
  return spinning;
}

// IcoSoundBars
export function danceSoundBar() {
  const danceSoundbar = keyframes`
    from {
      transform: scaleY(2);
    }
    to {
      transform: scaleY(14);
    }
  `;
  return danceSoundbar;
}

// Dancing Loader
export function dancingCircle1() {
  const dancingCircle1 = keyframes`
    0%   { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  `;
  return dancingCircle1;
}

export function dancingCircle2() {
  const dancingCircle2 = keyframes`
    0%   { opacity: 1; transform: translate3d(0, 0, 0) scale(1); }
    50%  { opacity: 0.5; transform: translate3d(1.5em, 0, 0) scale(.5); }
    100% { opacity: 1; transform: translate3d(0, 0, 0) scale(1);  }
  `;
  return dancingCircle2;
}

export function dancingCircle3() {
  const dancingCircle3 = keyframes`
    0%   { opacity: 1; transform: translate3d(0, 0, 0) scale(1); }
    50%  { opacity: 0.5; transform: translate3d(-1.5em, 0, 0) scale(.5); }
    100% { opacity: 1; transform: translate3d(0, 0, 0) scale(1); }
  `;
  return dancingCircle3;
}

export function dancingCircle4() {
  const dancingCircle4 = keyframes`
    0%   { opacity: 1; transform: translate3d(0, 0, 0) scale(1); }
    50%  { opacity: 0.5; transform: translate3d(0, 1.5em, 0) scale(.5); }
    100% { opacity: 1; transform: translate3d(0, 0, 0) scale(1); }
  `;
  return dancingCircle4;
}

export function dancingCircle5() {
  const dancingCircle5 = keyframes`
    0%   { opacity: 1; transform: translate3d(0, 0, 0) scale(1); }
    50%  { opacity: 0.5; transform: translate3d(0, -1.5em, 0) scale(.5); }
    100% { opacity: 1; transform: translate3d(0, 0, 0) scale(1); }
  `;
  return dancingCircle5;
}

// Circle Progress Bar
export function circularProgress() {
  const circularProgress = keyframes`
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  `;
  return circularProgress;
}

// ShowHide
export function showHide() {
  const showHide = keyframes`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  `;
  return showHide;
}

// ShowHide
export function hideShow() {
  const hideShow = keyframes`
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  `;
  return hideShow;
}

// SlideUp
export function slideUp() {
  const slideUp = keyframes`
    from {
      transform: translateY(16px);
    }
    to {
      transform: translateY(0);
    }
  `;
  return slideUp;
}
