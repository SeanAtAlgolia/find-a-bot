import { useState } from "react";
import algoliasearch from "algoliasearch";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navigation from "../components/Navigation";
import LogsTable from "../components/LogsTable";

export default function Home() {
  const [state, setState] = useState({
    appId: "",
    apiKey: "",
  });

  const [logs, setLogs] = useState([]);

  function handleChange(event) {
    const value = event.target.value;
    setState({
      ...state,
      [event.target.name]: value,
    });
  }

  function onSubmit(event) {
    retrieveLogs();
    event.preventDefault();
  }

  const client = algoliasearch(state.appId, state.apiKey);

  function retrieveLogs() {
    client.getLogs({ length: 1000 }).then(({ logs }) => {
      let obj = {};
      let arr = logs;
      let ips = [];

      for (var i = 0; i < arr.length; i++) {
        if (!obj[arr[i].ip]) {
          obj[arr[i].ip] = 1;
        } else if (obj[arr[i].ip]) {
          obj[arr[i].ip] += 1;
        }
      }

      let vals = Object.values(obj);
      let keys = Object.keys(obj);

      for (var j = 0; j < vals.length; j++) {
        ips.push({ ip: keys[j], count: vals[j] });
      }
      ips.sort(function (a, b) {
        return b.count - a.count;
      });
      setLogs(ips);
    });
  }

  return (
    <div>
      <Head>
        <title>Find A Bot</title>
        <meta name="description" content="Algolia Find A Bot" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <form
        onSubmit={onSubmit}
        className="mt-1 ml-3 space-y-6"
        action="#"
        method="POST"
      >
        <input type="hidden" name="remember" defaultValue="true" />
        <div className="rounded-md pb-1 shadow-sm -space-y-px">
          <div>
            <label htmlFor="App ID" className="sr-only">
              Application ID
            </label>
            <input
              id="App ID"
              name="appId"
              type="text"
              autoComplete="App ID"
              value={state.appId}
              onChange={handleChange}
              required
              className="appearance-none rounded-none relative block w-60 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="App ID"
            />
          </div>
          <div>
            <label htmlFor="API Key" className="sr-only">
              API Key
            </label>
            <input
              id="API Key"
              name="apiKey"
              type="password"
              autoComplete="Api Key"
              value={state.apiKey}
              onChange={handleChange}
              required
              className="appearance-none rounded-none relative block w-60 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Admin API Key"
            />
          </div>
          <div>
            <button
              type="submit"
              className="group relative my-3 w-48 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
              Submit
            </button>
          </div>
        </div>
      </form>
      <Navigation logs={logs} />

      <LogsTable logs={logs} />
    </div>
  );
}
