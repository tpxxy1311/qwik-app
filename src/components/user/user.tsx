import {  component$ } from "@builder.io/qwik";
import styles from "./user.module.css";

export default component$(({user}) => {
  return (
    <li class={styles.listitem}>
        <code onClick$={()=>alert("Hi")}>{user.username}</code>
        <p>{user.firstName} {user.lastName}</p>
    </li>
  );
});
