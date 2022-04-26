// // For the default version
// import algoliasearch from 'algoliasearch';
//
// const indexLogs = () => {
//   const algClient = algoliasearch('BV53WC31QT', '31c34d47fb2409d09808a25f5f01ec3e');
//
//   algClient.getLogs({
//     }).then(({ logs }) => {
//       const data = JSON.stringify(logs);
//       return data
//       // console.log
//       // // const obj = JSON.parse(logs);
//       //
//       // // console.log(obj.ip);
//       //
//       //
//       // // write JSON string to a file
//       // fs.writeFile('logs.json', data, (err) => {
//       //    if (err) {
//       //        throw err;
//       //    }
//       //     console.log("JSON data is saved.");
//       // });
//     });
// }
//
// export default indexLogs
