import React, { useState, useEffect } from 'react'
import algoliasearch from 'algoliasearch'

const Test = () => {
  const [logs, setLogs] = useState([])

  useEffect(() => {
    indexLogs()
  }, [])

  const indexLogs = () => {
    const algClient = algoliasearch('BV53WC31QT', '31c34d47fb2409d09808a25f5f01ec3e');

    algClient.getLogs({})
      .then(({ logs }) => {
        let obj = {}
        let arr = logs
        let ips = []

        for (var i = 0; i < arr.length; i++) {
          if (!obj[arr[i].ip]) {
            obj[arr[i].ip] = 1
          } else if (obj[arr[i].ip]) {
            obj[arr[i].ip] += 1
          }
        }

        let vals = Object.values(obj)
        let keys = Object.keys(obj)

        for (var j=0; j<vals.length; j++){
          ips.push({"ip" : keys[j], "count" : vals[j]})
        }

        setLogs(ips)
      })
  }

  if (!logs) {
    return (
      'no logs'
    )
  } else {
    return (
      <div>
        <h1>TRACK THE BOT!</h1>
        <div className="card-container">
          {logs.map(log => (
            <div
              className="card shadow-lg p-3 mb-5 bg-white rounded"
              key={log.id}
            >
              <h2 className="card-title">{log.ip}</h2>
              <p className="card-text">{log.count}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default Test
