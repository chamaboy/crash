import { Menu, Transition } from "@headlessui/react";
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
                                  <svg
                                    className="w-4 h-4 mr-3"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                    />
                                  </svg>
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
                                  <svg
                                    className="w-4 h-4 mr-3"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                    />
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                  </svg>
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
                                  <svg
                                    className="w-4 h-4 mr-3"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                                    />
                                  </svg>
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
                              <svg
                                className="w-4 h-4 mr-3"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                                />
                              </svg>
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
