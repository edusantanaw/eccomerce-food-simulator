import React from "react";
import {FaAddressBook} from 'react-icons/fa'
import {VscAccount} from 'react-icons/vsc'
import {MdPayment, MdSecurity} from 'react-icons/md'
import Account from "./settingsComponents/Account";

const Settings = () => {
  return (
    <div className="pt-10 pb-0 p-28 flex">
      <div>
        <h2 className="text-white text-4xl pb-10">Settings</h2>
        <ul className="flex flex-col gap-6">
          <li className="flex items-center border w-72 py-1 px-2  rounded-md border-neutral-400">
          <VscAccount className="text-5xl text-white bg-sky-600 p-2 rounded-md mr-3" />
            <div >
              <h3 className="text-white font-medium text-2xl">Account</h3>
              <span className="text-xl text-slate-200 font-thin">personal informations</span>
            </div>
          </li>
          <li className="flex items-center border w-72 py-1 px-2  rounded-md border-neutral-400">
          <FaAddressBook className="text-5xl text-white bg-teal-600 p-2 rounded-md mr-3" />
            <div>
              <h3  className="text-white font-medium text-2xl">Address</h3>
              <span className="text-xl text-slate-200 font-thin">address informations</span>
            </div>
          </li>
          <li className="flex items-center border w-72 py-1 px-2  rounded-md border-neutral-400">
            <MdPayment className="text-5xl text-white bg-emerald-800 p-2 rounded-md mr-3" />
            <div>
              <h3  className="text-white font-medium text-2xl">Payment Methods</h3>
              <span className="text-xl text-slate-200 font-thin">payment informations</span>
            </div>
          </li>
          <li className="flex items-center border w-72 py-1 px-2  rounded-md border-neutral-400">
          <MdSecurity className="text-5xl text-white bg-slate-700 p-2 rounded-md mr-3" />
            <div>
              <h3   className="text-white font-medium text-2xl">Security</h3>
              <span className="text-xl text-slate-200 font-thin">security settings</span>
            </div>
          </li>
        </ul>
      </div>
      <div className="pl-20 w-full">
        <Account />
      </div>
    </div>
  );
};

export default Settings;
