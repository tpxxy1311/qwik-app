import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { routeLoader$ } from '@builder.io/qwik-city';
import Counter from "~/components/counter/counter";
import Hero from "~/components/hero/hero";
import NextSteps from "~/components/next-steps/next-steps";
import Userlist from "~/components/userlist/userlist";

export const useUserList = routeLoader$(async () => {
  const response = await fetch('https://dummyjson.com/users?limit=20', {
    headers: { Accept: 'application/json' },
  });
  const users = await response.json()
  return users
});

export default component$(() => {

  const userList = useUserList();
  return (
    <>
      <Hero />
      <div class="container container-center container-spacing-xl">
        <h3>
          You can <span class="highlight">interact</span>
          <br /> with me!
        </h3>
        <Counter />
        <NextSteps/>
        <h3>
        These useres develop <br/>
        with  <span class="highlight">Qwik</span>
        </h3>
        <Userlist users={userList.value.users}/>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "This App was made with Qwik",
    },
  ],
};
