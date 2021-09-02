import { sineOut, elasticOut, expoOut, cubicOut, circOut, bounceOut, backOut } from 'svelte/easing';

export default function getEasing(easing) {
  let eases = {
    sineOut, elasticOut, expoOut,
    cubicOut, circOut, bounceOut, backOut
  };
  return easing ? (eases[easing] || sineOut) : sineOut;
}