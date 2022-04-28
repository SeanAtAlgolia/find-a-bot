import React from "react";

const tabs = [
  { name: "Hub", href: "#", current: false },
  { name: "Events Debugger", href: "#", current: false },
  { name: "Find A Bot", href: "#", count: "1", current: true },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navigation = React.memo(({ logs }) => {
  return (
    <div className="ml-6">
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
        <select
          id="tabs"
          name="tabs"
          className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          defaultValue={tabs.find((tab) => tab.current).name}
        >
          {tabs.map((tab) => (
            <option key={tab.name}>{tab.name}</option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            {tabs.map((tab) => (
              <a
                key={tab.name}
                href="#"
                className={classNames(
                  tab.current
                    ? "border-indigo-500 text-indigo-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200",
                  "whitespace-nowrap flex py-4 px-1 border-b-2 font-medium text-sm"
                )}
                aria-current={tab.current ? "page" : undefined}
              >
                {tab.name}
                {tab.count ? (
                  <span
                    className={classNames(
                      tab.current
                        ? "bg-indigo-100 text-indigo-600"
                        : "bg-gray-100 text-gray-900",
                      "hidden ml-3 py-0.5 px-2.5 rounded-full text-xs font-medium md:inline-block"
                    )}
                  >
                    {logs.filter((log) => log.count > 500).length}
                  </span>
                ) : null}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
});

export default Navigation;
