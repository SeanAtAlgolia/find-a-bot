const logsOutPut = () => {
  return (
    <table className="md:container md:mx-auto table-fixed">
      <thead>
        <tr>
          <th>IP</th>
          <th>Action</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>12.333.22.0</td>
          <td>Queries</td>
          <td>60962</td>
        </tr>
        <tr>
          <td>12.333.22.0</td>
          <td>Queries</td>
          <td>4632</td>
        </tr>
        <tr>
          <td>42.163.15.1</td>
          <td>Queries</td>
          <td>761</td>
        </tr>
        <tr>
          <td>96.491.10.3</td>
          <td>Queries</td>
          <td>506</td>
        </tr>
      </tbody>
    </table>
  );
};

export default logsOutPut;
