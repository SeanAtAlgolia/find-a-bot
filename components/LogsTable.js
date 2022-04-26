/* This example requires Tailwind CSS v2.0+ */
const fakelogs = [
  {
    ip: "12.546.01.8",
    action: "Queries",
    total: 4086,
    risk: "High",
  },
  {
    ip: "18.498.01.9",
    action: "Queries",
    total: 400000,
    risk: "High",
  },
  {
    ip: "61.89.31.226",
    action: "Queries",
    total: 39,
    risk: "Low",
  },
  {
    ip: "123.123.12.1",
    action: "Queries",
    total: 306,
    risk: "Low",
  },
  {
    ip: "172.486.56.8",
    action: "Queries",
    total: 205,
    risk: "Low",
  },
  {
    ip: "69.89.31.226",
    action: "Queries",
    total: 600,
    risk: "Low",
  },
  {
    ip: "172.16.254.1",
    action: "Queries",
    total: 59,
    risk: "Low",
  },
  {
    ip: "216.58.216.164",
    action: "Queries",
    total: 875,
    risk: "Low",
  },
  {
    ip: "192.0.0.7",
    action: "Queries",
    total: 277,
    risk: "Low",
  },
  {
    ip: "887.48.01.33",
    action: "Queries",
    total: 306,
    risk: "Low",
  },
  {
    ip: "163.67.09.11",
    action: "Queries",
    total: 23,
    risk: "Low",
  },
];

export default function LogsTable({ logs }) {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto"></div>
      </div>
      <div className="-mx-4 mt-8 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-lg">
        <table className="min-w-full divide-y divide-gray-300">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
              >
                IP Address
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
              >
                Action
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
              >
                Total
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Risk
              </th>
              <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                <span className="sr-only">View Logs</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {logs.map((item) => (
              <tr key={item.ip}>
                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                  {item.ip}
                </td>
                <td className="hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 sm:table-cell">
                  Queries
                </td>
                <td className="hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 lg:table-cell">
                  {item.count}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  <span
                    className={`inline-flex rounded-full  px-2 text-xs font-semibold leading-5 ${
                      item.count < 500
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {item.count > 500 ? "High" : "Low"}
                  </span>
                </td>
                <td className="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                  <a href="#" className="text-indigo-600 hover:text-indigo-900">
                    View Logs<span className="sr-only">, {item.name}</span>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
