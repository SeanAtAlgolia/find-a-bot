import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Tabs from "../components/Tabs";
import LogsOutPut from "../components/LogsOutput";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Find A Bot</title>
        <meta name="description" content="Algolia Find A Bot" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Tabs />
      <LogsOutPut />
    </div>
  );
}
