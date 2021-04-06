import Head from "next/head";
// import styles from "../styles/Home.module.css";
import getAllGroups from '../dummy'

export default function Home() {
  const groups = getAllGroups()
  let g1 = groups[0]
  return (
    <div>
      <h1>Create Next App</h1>
    </div>
  );
}
