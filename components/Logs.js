import React, { useState, useEffect } from "react";
import algoliasearch from "algoliasearch";
import LogsTable from "./LogsTable";

const Logs = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    indexLogs();
  }, []);

  const indexLogs = () => {
    const algClient = algoliasearch(
      "BV53WC31QT",
      "31c34d47fb2409d09808a25f5f01ec3e"
    );

    algClient.getLogs({ length: 1000 }).then(({ logs }) => {
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
  };

  if (!logs) {
    return "no logs";
  } else {
    return <LogsTable logs={logs} />;
  }
};

export default Logs;
