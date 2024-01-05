import {  component$ } from "@builder.io/qwik";
import styles from "./userlist.module.css";
import User from "../user/user";

export default component$(({users}) => {
  return (
    <div class={styles.userbox}>
      <ul>
        {users.map((user:any)=>
            <User key={user.id} user={user}/>
        )}
      </ul>
    </div>
  );
});
