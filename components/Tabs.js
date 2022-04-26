const tabs = () => {
  return (
    <div className="container mx-auto my-2 rounded justify-center">
      <ul id="tabs" className="inline-flex w-full px-1 pt-2 ">
        <li className="px-4 py-2 font-semibold text-gray-800 rounded-t opacity-50">
          <a href="#">Hub</a>
        </li>
        <li className="px-4 py-2 font-semibold text-gray-800 rounded-t opacity-50">
          <a href="#">Debugger</a>
        </li>
        <li className="px-4 py-2 -mb-px font-semibold text-gray-800 border-b-2 border-purple-800 rounded-t ">
          <a className="text-slate-900" href="#">
            Find A Bot
          </a>
        </li>
      </ul>
      <div id="tab-contents"></div>
    </div>
  );
};

export default tabs;
