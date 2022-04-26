import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navigation from "../components/Navigation";
import LogsTable from "../components/LogsTable";
import Logs from "../components/Logs";

export default function Home() {
  const [appID, setAppID] = useState("");
  const [apiKey, setApiKey] = useState("");

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    const name = this.input.value;
  };
  return (
    <div>
      <Head>
        <title>Find A Bot</title>
        <meta name="description" content="Algolia Find A Bot" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <div className="isolate -space-y-px rounded-md shadow-sm">
        <div className="relative border border-gray-300 rounded-md rounded-b-none px-3 py-2 focus-within:z-10 focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
          <label
            htmlFor="name"
            className="block text-xs font-medium text-gray-900"
          >
            App ID
          </label>
          <input
            type="text"
            name="App ID"
            id="App ID"
            className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
            placeholder="Input App ID"
          />
        </div>
        <div className="relative border border-gray-300 rounded-md rounded-t-none px-3 py-2 focus-within:z-10 focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
          <label
            htmlFor="API Key"
            className="block text-xs font-medium text-gray-900"
          >
            API Key
          </label>
          <input
            type="text"
            name="API Key"
            id="API Key"
            className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
            placeholder="Input API Key"
          />
        </div>
      </div> */}
      <form
        onSubmit={handleSubmit}
        className="mt-1 space-y-6"
        action="#"
        method="POST"
      >
        <input type="hidden" name="remember" defaultValue="true" />
        <div className="rounded-md shadow-sm -space-y-px">
          <div>
            <label htmlFor="App ID" className="sr-only">
              Application ID
            </label>
            <input
              id="App ID"
              name="App ID"
              type="App ID"
              autoComplete="App ID"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="App ID"
            />
          </div>
          <div>
            <label htmlFor="API Key" className="sr-only">
              API Key
            </label>
            <input
              id="API Key"
              name="API Key"
              type="API Key"
              autoComplete="API Key"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Admin API Key"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="group relative w-48 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
            Submit
          </button>
        </div>
      </form>
      <Navigation />
      <Logs />
    </div>
  );
}
