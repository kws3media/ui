<figure class="image is-{size}">
  <img use:lazyLoadImage={src} alt={alt_text} />
</figure>

<style>
  img {
    opacity: 0;
    transition: all 5s ease;
  }
</style>

<script>
  import { lazyLoadImage } from "./actions";

  export let size = "",
    src = "",
    alt_text = "";
</script>
