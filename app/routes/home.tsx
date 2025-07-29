import type { Route } from "./+types/home";
import { MyFlagComponent } from "~/components/MyFlagComponent";
import { MyButtonSendHit } from "~/components/MyButtonSendHit";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <>
      <h1>Example of Flagship implementation with React Router framework</h1>
      <p>flag key: my_flag_key</p>
      <MyFlagComponent />
      <MyButtonSendHit />
    </>
  );
}
