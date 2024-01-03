import { component$ } from "@builder.io/qwik";
import styles from "./hero.module.css";
import ImgThunder from "~/media/thunder.png?jsx";

export default component$(() => {
  return (
    <div class={["container", styles.hero]}>
      <ImgThunder class={styles["hero-image"]} />
      <h1>
        Qwik.js <span class="highlight">vs </span>
        Next.js <br /> Speed Comparison
      </h1>
      <p>This App was made with Qwik.</p>
    </div>
  );
});
