import { Menu, Transition } from "@headlessui/react";
import {
  ArchiveIcon,
  CogIcon,
  HeartIcon,
  LogoutIcon,
} from "@heroicons/react/outline";
import Link from "next/link";

import type { UserData } from "../types/user";

export const UserMenu = (props: {
  user: UserData;
  onClick: () => Promise<void>;
}): JSX.Element => {
  const user = props.user;
  return (
    <div className="flex items-center justify-center">
      <div className="relative inline-block text-left h-10 w-10">
        <Menu>
          {({ open }) => {
            return (
              <>
                <Menu.Button className="rounded-full h-10 w-10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300">
                  <img
                    className="object-cover rounded-full"
                    src={user?.photoUrl || undefined}
                    alt=""
                  />
                </Menu.Button>

                <Transition
                  show={open}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items
                    static
                    className="absolute right-0 w-56 mt-1 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
                  >
                    <div className="px-4 py-3">
                      <p className="text-sm font-bold leading-5 text-gray-900 truncate">
                        {user.name}
                      </p>
                    </div>

                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => {
                          return (
                            <div
                              className={`${
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700"
                              }`}
                            >
                              <Link href="#support">
                                <a className="flex items-center w-full px-4 py-2 text-sm leading-5 text-left">
                                  <HeartIcon className="w-4 h-4 mr-3" />
                                  <span>いいねしたお店</span>
                                </a>
                              </Link>
                            </div>
                          );
                        }}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => {
                          return (
                            <div
                              className={`${
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700"
                              }`}
                            >
                              <Link href="settings">
                                <a className="flex items-center w-full px-4 py-2 text-sm leading-5 text-left">
                                  <CogIcon className="w-4 h-4 mr-3" />
                                  <span>アカウント設定</span>
                                </a>
                              </Link>
                            </div>
                          );
                        }}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => {
                          return (
                            <div
                              className={`${
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700"
                              }`}
                            >
                              <Link href="#contact">
                                <a className="flex items-center w-full px-4 py-2 text-sm leading-5 text-left">
                                  <ArchiveIcon className="w-4 h-4 mr-3" />
                                  <span>目安箱</span>
                                </a>
                              </Link>
                            </div>
                          );
                        }}
                      </Menu.Item>
                    </div>

                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => {
                          return (
                            <button
                              className={`${
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700"
                              } flex items-center w-full px-4 py-2 text-sm leading-5 text-left`}
                              onClick={props.onClick}
                            >
                              <LogoutIcon className="w-4 h-4 mr-3" />
                              <span>ログアウト</span>
                            </button>
                          );
                        }}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </>
            );
          }}
        </Menu>
      </div>
    </div>
  );
};
