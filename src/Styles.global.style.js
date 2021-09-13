/* eslint-disable indent */
// [styled-components] createGlobalStyle
// https://www.styled-components.com/docs/api#createglobalstyle
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    /* font-family */
    --ff-regular: ${props => props.theme.fontFamily.REGULAR};
    --ff-semi: ${props => props.theme.fontFamily.SEMI};
    --ff-condensed: ${props => props.theme.fontFamily.CONDENSED};

    /* background */
    --bg-primary: ${props => props.theme.color.BG_PRIMARY};
    --bg-primary-transparent: ${props => {
      return props.theme.color.BG_PRIMARY_TRANSPARENT;
    }};

    --bg-900: #171419;
    --bg-800: #1A181E;
    --bg-700: #212027;
    --bg-600: #24242C;
    --bg-500: #282A31;
    --bg-400: #4A4E52;
    --bg-300: #6D7173;
    --bg-200: #8F9494;
    --bg-100: #B1B5B5;
    --bg-50: #D4D6D5;
    --bg-empty: rgba(27, 25, 31, 1);

    --bg-default: rgb(24,24,24);

    /* foregrand */
    --fg-primary: ${props => props.theme.color.FG_PRIMARY};

    --fg-50: rgba(255,255,255,1);
    --fg-100: rgba(255,255,255,.7);
    --fg-200: rgba(255,255,255,.5);
    --fg-300: rgba(255,255,255,.38);
    --fg-400: rgba(255,255,255,.19);

    /* header */
    --header-height: 64px;
    --header-bg: var(--bg-primary);
    /* --header-height-genre: 40px; */
    --header-height-genre: 0px;

    /* lnav */
    --lnav-height: 64px;
    --lnav-bg: var(--bg-primary);

    /* controlbar */
    --bg-ctrlbar: rgba(27, 25, 31, 1);
    --bg-ctrlbar-transparent: rgba(27, 25, 31, 0);
    --np-height: 255px;
    --ctrlbar-height: 80px;
    --ctrlbar-btn-size: 40px;
    --ctrlbar-btn-bg-color: transparent;
    --ctrlbar-btn-bg-color-hover: transparent;

    /* primary */
    --grid-primary-width: 244px;
    --grid-secondary-width: 1024px;
    --grid-tertiary-width: 244px;
    --grid-gap: 32px;

    --st-margin-bottom: 3em;

    --outside-margin: 18px;
    @media (min-width: 720px) {
      --outside-margin: 24px;
    }

    @media (min-width: 1280px) {
      --outside-margin: 40px;
      --grid-gap: 48px;
    }

    @media (min-width: 1440px) {
      --grid-primary-width: 260px;
      --grid-tertiary-width: 260px;
    }

    @media (min-width: 1600px) {
      --grid-primary-width: 274px;
      --grid-tertiary-width: 274px;
    }

    @media (min-width: 1920px) {
      --grid-primary-width: 324px;
      --grid-tertiary-width: 324px;
    }

    @media (min-width: 720px) {
      --ctrlbar-height: 40px;
    }

    /* z-index */
    --z-always-top: 99999;
    --z-header: 200;
    --z-header-genre: 201;
    --z-header-revised: 202;
    --z-ctrlbar: 200;

    --z-lnav-alpha: 100;
    --z-lnav-beta: 101;

    --z-vplyr-alpha: 50;
    --z-vplyr-beta: 51;

    --z-local-page: 52;

    --z-np-track-info: 0;
    --z-np-preview: 3;
    --z-np-btn-quality-small: 2;
    --z-np-ima: 3;
    --z-np-track-info-fullscreen: 4;
    --z-np-lyrics: 5;
    --z-np-btn-close: 999;
    --z-np-btn-fullscreen: 6;
    --z-np-btn-quality: 6;
    --z-np-btn-share: 6;
    --z-np-progress-bar: 6;
    --z-np-progress-bar-tooltips: 999;
    --z-np-control: 6;
    --z-np-lyrics-fullscreen: 7;
    --z-np-quality-popup: 300;

    --z-sidebar: 200;
    --z-sidebar-queue: 250;
    --z-sidebar-player: 1000;
    --z-sidebar-tab: 60;
    --z-sidebar-lyrics: 999;
    --z-navigation: 999;
    --z-new-2-columns: 100;
    --z-loading: 200;
    --z-loading-layout: 199;
    --z-playlist: 5;
    --z-playlist-loading: 10;
    --z-subgenre-loading: 10;
    --z-theme: 5;
    --z-theme-loading: 10;
    --z-breadcumb: 2;
    --z-tag: -1;
    --z-video-number: 1;
    --z-video-btn: 9;
    --z-section-heading: 100;
    --z-section-breadcumb: 100;
    --z-track-disk: 1;
    --z-track-action: 30;
    --z-track-action-lyrics: -1;
    --z-footer-item: -1;
    --z-header-wrapper: 100;
    --z-lnavtop: 100;
    --z-overview-bgblur: -1;
    --z-overview-img-small: 199;
    --z-local-nav: 180;
    --z-popup-close: 200;
    --z-gdpr: 999;
    --z-preview-tooltips: 10;
    --z-sem-page: 202;
    --z-popup-overlay: 204;

    --w-side-bar: 200px;
    --w-local-menu: 200px;

    /* easing */
    --easeOutQuint:   cubic-bezier(0.23,  1,     0.32,  1    );

    /** shadow */
    --shadow-2: rgba(0, 0, 0, 0.2);
    --shadow-1: rgba(0, 0, 0, 0.1);
    --shadow-inset: rgba(255, 255, 255, 0.5);
  }

  html {
    box-sizing: border-box;
    font-size: 100%;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: transparent;
    /* hide webkit scrollbar */
    ::-webkit-scrollbar {
      display: none;
    }
    scrollbar-width: none; /* hide firefox scrollbar */
    -ms-overflow-style: none; /* hide edge scrollbar */
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    list-style: none;
    margin: 0;
    font-family: var(--ff-semi);
    background: var(--bg-primary);
    color: var(--fg-primary);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -ms-overflow-style: -ms-autohiding-scrollbar;
  }
  
  .overFlowHidden {
    overflow: hidden;
  }
  /* 1. Add the correct box sizing in Firefox. */
  /* 2. Show the overflow in Edge and IE. */
  hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
  }

  pre {
    font-family: monospace, monospace;
    font-size: 1em;
  }

  code,
  kbd,
  samp {
    font-family: monospace, monospace;
    font-size: 1em;
  }

  /* Remove the gray background on active links in IE 10. */
  a {
    cursor: pointer;
    background-color: transparent;
  }

  /* Add the correct font weight in Chrome, Edge, and Safari. */
  b,
  strong {
    font-weight: bolder;
  }

  /* Add the correct font size in all browsers. */
  small {
    font-size: 80%;
  }

  /* Remove the border on images inside links in IE 10. */
  img {
    border-style: none;
  }

  /* 1. Change the font styles in all browsers. */
  /* 2. Remove the margin in Firefox and Safari. */
  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
  }

  /* Show the overflow in IE. */
  /* 1. Show the overflow in Edge. */
  button,
  input {
    overflow: visible;
  }

  /* Remove the inheritance of text transform in Edge, Firefox, and IE. */
  /* 1. Remove the inheritance of text transform in Firefox. */
  button,
  select {
    text-transform: none;
  }

  /* Correct the inability to style clickable types in iOS and Safari. */
  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
  }

  /* Remove the inner border and padding in Firefox. */
  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  /* Restore the focus styles unset by the previous rule. */
  button:-moz-focusring,
  [type="button"]:-moz-focusring,
  [type="reset"]:-moz-focusring,
  [type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  /* Remove the default vertical scrollbar in IE 10+. */
  textarea {
    overflow: auto;
  }

  /* 1. Add the correct box sizing in IE 10. */
  /* 2. Remove the padding in IE 10. */
  [type="checkbox"],
  [type="radio"] {
    box-sizing: border-box;
    padding: 0;
  }

  /* 1. Correct the odd appearance in Chrome and Safari. */
  /* 2. Correct the outline style in Safari. */
  [type="search"] {
    -webkit-appearance: textfield;
    outline-offset: -2px;
  }

  /* Remove the inner padding in Chrome and Safari on macOS. */
  [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  /* Add the correct display in IE 10+. */
  template {
    display: none;
  }

  /* Add the correct display in IE 10. */
  [hidden] {
    display: none;
  }

  /* ::-moz-selection {
    background: #8F9494;
    text-shadow: none;
  } */

  /* ::selection {
    background: #8F9494;
    text-shadow: none;
  } */

  hr {
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid #000;
    padding: 0;
  }

  audio,
  canvas,
  iframe,
  img,
  svg,
  video {
    vertical-align: middle;
  }

  img,
  video {
    width: 100%;
  }

  button {
    padding: 0;
    border: none;
    font: inherit;
    color: inherit;
    background-color: transparent;
    cursor: pointer;
  }

  a {
    color: var(--fg-primary);
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  /* Hide visually and from screen readers */
  .hidden {
    display: none !important;
  }

  /* Hide only visually, but have it available for screen readers: */
  .visuallyhidden {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
    white-space: nowrap;
  }

  /* Extends the .visuallyhidden class to allow the element to be focusable when navigated to via the keyboard: */
  .visuallyhidden.focusable:active,
  .visuallyhidden.focusable:focus {
    clip: auto;
    height: auto;
    margin: 0;
    overflow: visible;
    position: static;
    width: auto;
    white-space: inherit;
  }

  /* Hide visually and from screen readers, but maintain layout */
  .invisible {
    visibility: hidden;
  }

  /* Clearfix: contain floats */
  .clearfix:before,
  .clearfix:after {
    content: " ";
    display: table;
  }
  .clearfix:after {
    clear: both;
  }

  .text-lg {
    font-size: 18px;
    font-weight: 500;
    line-height: 1.5;
    letter-spacing: 0.25px;
  }
  .text-md {
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: 0.25px;
  }
  .text-sm {
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
  }

  .alwaysOnTop {
    z-index: var(--z-always-top) !important;
  }

  .fb-shadow {
    box-shadow: 0 12px 28px 0 var(--shadow-2), 0 2px 4px 0 var(--shadow-1), inset 0 0 0 1px var(--shadow-inset);
  }

  /* nprogress
  https://github.com/rstacruz/nprogress/blob/master/nprogress.css
  */

  #nprogress {
    pointer-events: none;
  }

  #nprogress .bar {
    background: #00959f;
    position: fixed;
    z-index: 10000003;
    top: 0;
    left: 0;

    width: 100%;
    height: 2px;
  }

  #nprogress .peg {
    display: block;
    position: absolute;
    right: 0px;
    width: 100px;
    height: 100%;
    box-shadow: 0 0 10px #00959f, 0 0 5px #00959f;
    opacity: 1;

    -webkit-transform: rotate(3deg) translate(0px, -4px);
    -ms-transform: rotate(3deg) translate(0px, -4px);
    transform: rotate(3deg) translate(0px, -4px);
  }

  #nprogress .spinner {
    display: none;
    position: fixed;
    z-index: 10000003;
    top: 15px;
    right: 15px;
  }

  #nprogress .spinner-icon {
    width: 18px;
    height: 18px;
    box-sizing: border-box;

    border: solid 2px transparent;
    border-top-color: #00959f;
    border-left-color: #00959f;
    border-radius: 50%;

    -webkit-animation: nprogress-spinner 400ms linear infinite;
    animation: nprogress-spinner 400ms linear infinite;
  }

  .nprogress-custom-parent {
    overflow: hidden;
    position: relative;
  }

  .nprogress-custom-parent #nprogress .spinner,
  .nprogress-custom-parent #nprogress .bar {
    position: absolute;
  }

  // ripple
  .ripple {
    background-position: center;
    transition: background 0.2s;
  }
  .ripple:hover {
    background: #555555 radial-gradient(circle, transparent 1%, #555555 1%)
      center/15000%;
  }
  .ripple:active {
    background-color: #999999;
    background-size: 100%;
    transition: background 0s;
  }

  // ripple light
  .ripple.ripple-light:hover {
    background: #eaeaea radial-gradient(circle, transparent 1%, #eaeaea 1%)
      center/15000%;
  }
  .ripple.ripple-light:active{
    background-color: #cacaca;
    background-size: 100%;
    transition: background 0s;
  }

  // ripple green
  .ripple.ripple-green:hover {
    background: #00959F radial-gradient(circle, transparent 1%, #01aab5 1%)
      center/15000%;
  }
  .ripple.ripple-green:active{
    background-color: #00959F;
    background-size: 100%;
    transition: background 0s;
  }


  @-webkit-keyframes nprogress-spinner {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
  @keyframes nprogress-spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .no-scrollbar {
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    ::-webkit-scrollbar {
      display: none;
      width: 0;
      height: 0;
      background: transparent;
    }
  }

  .popup-overlay {
    scrollbar-width: none;
    &::-webkit-scrollbar {
      width: 0;
      background: transparent;
    }
  }
`;
