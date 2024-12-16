import AppleStoreSvg from "./components/svg/AppleStoreSvg";
import ChartSvg from "./components/svg/ChartSvg";
import Image from "next/image";
import Link from "next/link";
import ListIcon from "./components/svg/ListIcon";
import PlusIcon from "./components/svg/PlusIcon";
import PoketSvg from "./components/svg/PoketSvg";
import PoketSvgWhite from "./components/svg/PoketSvgWhite";
import SpinSvg from "./components/svg/SpinSvg";

const navText = ["Features", "Reviews", "Pricing", "FAQs"];
const imgurl = [
  "https://pocket.tailwindui.com/_next/static/media/forbes.c4b4b0dd.svg",
  "https://pocket.tailwindui.com/_next/static/media/techcrunch.fe121d74.svg",
  "https://pocket.tailwindui.com/_next/static/media/wired.42c588dc.svg",
  "https://pocket.tailwindui.com/_next/static/media/cnn.eaae184a.svg",
  "https://pocket.tailwindui.com/_next/static/media/bbc.9cfc75a9.svg",
  "https://pocket.tailwindui.com/_next/static/media/cbs.aa596395.svg",
  "https://pocket.tailwindui.com/_next/static/media/fast-company.8fba32a5.svg",
];

export default function Home() {
  return (
    <div>
      {/* header */}
      <nav className="py-5 px-5 md:px-0 w-full flex justify-between  ">
        <div className=" mx-auto w-[1280px] flex justify-between">
          <div className=" flex items-center gap-[50px]">
            <Link href="/">
              <h2>
                <PoketSvg />
              </h2>
            </Link>
            <ul className="flex gap-[40px]">
              {navText.map((item, index) => {
                return (
                  <li key={index}>
                    <Link href="/" className="text-gray-600">
                      {item}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <ul className="hidden gap-2 md:flex">
            <li>
              <button className="px-4 py-2 border-[1px] text-gray-500 border-gray-200 rounded-[10px]">
                log in
              </button>
            </li>
            <li className="">
              <button className="px-4 py-2 text-white border-[1px] border-gray-200 rounded-[10px] bg-black ">
                Download
              </button>
            </li>
          </ul>
          <button className=" md:hidden">버튼</button>
        </div>
      </nav>
      <section className="w-full">
        <div className="py-[50px] md:py-[150px] mx-auto  w-full  md:w-[1280px] flex flex-wrap justify-center gap-20 md:gap-0">
          <div className="w-[550px]">
            <h2 className="mb-4 text-[42px] font-[500]">
              Invest at the perfect time.
            </h2>

            <p className="text-[18px] text-gray-500">
              By leveraging insights from our network of industry insiders,
              you’ll know exactly when to buy to maximize profit, and exactly
              when to sell to avoid painful losses.
            </p>

            <div className="mt-8 flex gap-[20px]">
              <button className="px-4  py-2  border-[1px] border-gray-200 rounded-[10px]">
                <AppleStoreSvg />
              </button>
              <button className=" px-4  py-2 text-[14px] border-[1px] border-gray-200 rounded-[10px]">
                Watch the video
              </button>
            </div>

            <div className="mt-16">
              <p className="text-[14px]">As featured in</p>
            </div>
            <ul className="mt-5 flex flex-wrap gap-6">
              {imgurl.map((item) => {
                return (
                  <li>
                    <img src={item} alt="" />
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex flex-1 justify-center overflow-hidden md:overflow-visible">
            <div className="relative w-[350px] h-[200px] md:h-[400px]">
              <SpinSvg />

              <div className="p-3 w-[350px] absolute left-0 top-0 bg-gray-200 rounded-[40px] border-1-[1px] border-gray-100 ">
                <div className="w-full h-[350px] md:h-[50%] absolute left-0 top-0 md:top-[unset] md:bottom-0  bg-gradient-to-b from-transparent via-transparent md:via-gray-10  to-gray-200 z-[100]"></div>
                <div className="pt-10 flex flex-col w-full h-full relative  bg-black rounded-[40px]">
                  <span className="w-[150px] py-3 absolute left-[50%] top-0 translate-x-[-50%] bg-gray-200 rounded-br-[14px] rounded-bl-[14px]">
                    <span className="mx-auto  w-[60px] h-[5px] block bg-gray-400 rounded-[1px]"></span>
                  </span>
                  <div className="flex justify-center">
                    <PoketSvgWhite />
                  </div>
                  <div className="relative mt-4 flex-1 flex flex-col w-full bg-white rounded-[20px] ">
                    <div className="p-4">
                      <div className="pb-4 flex justify-between border-b-[1px]border-gray-300">
                        <div className="flex items-center gap-[10px]">
                          <p className="text-[12px] text-gray-400">
                            Tailwind Labs, Inc.
                          </p>
                          <p className="text-[14px]">$CSS</p>
                        </div>
                        <button>
                          <PlusIcon />
                        </button>
                      </div>
                      <div className="flex flex-col">
                        <div className=" pt-4 flex items-end justify-between">
                          <div className=" flex items-end gap-2">
                            <span className=" text-[24px]">752.56</span>
                            <span>USD</span>
                          </div>
                          <span className="text-[rgb(6,182,212)]">+12.21%</span>
                        </div>
                        <div className="my-1 flex gap-[8px]">
                          <span className="text-[14px] text-gray-400">1D</span>
                          <span className="text-[14px] text-gray-400">5D</span>
                          <span className="text-[14px] text-[rgb(6,182,212)]">
                            1M
                          </span>
                          <span className="text-[14px] text-gray-400">6M</span>
                          <span className="text-[14px] text-gray-400">1Y</span>
                          <span className="text-[14px] text-gray-400">5Y</span>
                        </div>
                        <div className=" bg-gray-100 rounded-[5px]">
                          <ChartSvg />
                        </div>
                        <button className="py-2  mt-4 w-full text-white bg-[rgb(6,182,212)] rounded-[4px] font-[700]">
                          Trade
                        </button>
                        <ul className="mt-5 flex flex-col justify-between gap-2 ">
                          <li className="flex justify-between">
                            <span className=" text-[14px] text-gray-400">
                              Open
                            </span>
                            <span className="text-[14px] text-gray-400">
                              6,387.55
                            </span>
                          </li>
                          <li className="flex justify-between">
                            <span className="text-[14px] text-gray-400">
                              closed
                            </span>
                            <span className="text-[14px] text-gray-400">
                              6,487.09
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-[50px] md:py-[150px] bg-black relative z-[101]">
        <div className="mx-auto w-full md:w-[1280px] py-[150px] px-5 md:px-0">
          <div>
            <h2 className="text-[32px] font-[600] text-white">
              Every feature you need to win. Try it for yourself.
            </h2>
            <p className="mt-4 text-gray-400">
              Pocket was built for investors like you who play by their own
              rules and aren’t going to let
              <br /> SEC regulations get in the way of their dreams. If other
              investing tools are afraid to build it,
              <br />
              Pocket has it.
            </p>
          </div>
          <div className="mt-20 hidden md:flex flex-col md:flex-row">
            <div className="flex-1">
              <div className="mx-auto ">
                <div className="p-3 w-[350px] mx-auto left-0 top-0 bg-gray-200 rounded-[40px] border-1-[1px] border-gray-100 ">
                  <div className="pt-10 flex flex-col w-full h-full relative bg-black rounded-[40px]">
                    <span className="w-[150px] py-3 absolute left-[50%] top-0 translate-x-[-50%] bg-gray-200 rounded-br-[14px] rounded-bl-[14px]">
                      <span className="mx-auto  w-[60px] h-[5px] block bg-gray-400 rounded-[1px]"></span>
                    </span>

                    <div className="flex justify-center">
                      <PoketSvgWhite />
                    </div>
                    <div className="relative mt-4 flex-1 flex flex-col w-full bg-white rounded-[20px] ">
                      <div className="p-4">
                        <div className="pb-4 flex justify-between border-b-[1px]border-gray-300">
                          <div className="flex items-center gap-[10px]">
                            <p className="text-[12px] text-gray-400">
                              Tailwind Labs, Inc.
                            </p>
                            <p className="text-[14px]">$CSS</p>
                          </div>
                          <button>
                            <PlusIcon />
                          </button>
                        </div>
                        <div className="flex flex-col">
                          <div className=" pt-4 flex items-end justify-between">
                            <div className=" flex items-end gap-2">
                              <span className=" text-[24px]">752.56</span>
                              <span>USD</span>
                            </div>
                            <span className="text-[rgb(6,182,212)]">
                              +12.21%
                            </span>
                          </div>
                          <div className="my-1 flex gap-[8px]">
                            <span className="text-[14px] text-gray-400">
                              1D
                            </span>
                            <span className="text-[14px] text-gray-400">
                              5D
                            </span>
                            <span className="text-[14px] text-[rgb(6,182,212)]">
                              1M
                            </span>
                            <span className="text-[14px] text-gray-400">
                              6M
                            </span>
                            <span className="text-[14px] text-gray-400">
                              1Y
                            </span>
                            <span className="text-[14px] text-gray-400">
                              5Y
                            </span>
                          </div>
                          <div className=" bg-gray-100 rounded-[5px]">
                            <ChartSvg />
                          </div>
                          <button className="py-2  mt-4 w-full text-white bg-[rgb(6,182,212)] rounded-[4px] font-[700]">
                            Trade
                          </button>
                          <ul className="mt-5 flex flex-col justify-between gap-2 ">
                            <li className="flex justify-between">
                              <span className=" text-[14px] text-gray-400">
                                Open
                              </span>
                              <span className="text-[14px] text-gray-400">
                                6,387.55
                              </span>
                            </li>
                            <li className="flex justify-between">
                              <span className="text-[14px] text-gray-400">
                                closed
                              </span>
                              <span className="text-[14px] text-gray-400">
                                6,487.09
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ul>
              <li className="p-8 mb-4 hover:bg-gray-800 rounded-[10px]">
                <span>
                  <ListIcon />
                </span>
                <span className=" mt-4  mb-4 block text-[18px] text-white font-[700]">
                  Invite friends for better returns
                </span>
                <p className="text-gray-400">
                  For every friend you invite to Pocket, you get insider
                  notifications 5<br /> seconds sooner. And it’s 10 seconds if
                  you invite an insider.
                </p>
              </li>
              <li className="p-8 mb-4 hover:bg-gray-800 rounded-[10px]">
                <span>
                  <ListIcon />
                </span>
                <span className=" mt-4 mb-4  block text-[18px] text-white font-[700]">
                  Notifications on stock dips
                </span>
                <p className="text-gray-400">
                  Get a push notification every time we find out something
                  <br />
                  that’s going to lower the share price on your holdings so you
                  <br />
                  can sell before the information hits the public markets.
                </p>
              </li>
              <li className="p-8 mb-4 hover:bg-gray-800 rounded-[10px]">
                <span>
                  <ListIcon />
                </span>
                <span className=" mt-4 mb-4  block text-[18px] text-white font-[700]">
                  Invest what you want
                </span>
                <p className="text-gray-400">
                  We hide your stock purchases behind thousands of anonymous
                  <br />
                  trading accounts, so suspicious activity can never be traced
                  <br />
                  back to you.
                </p>
              </li>
            </ul>
          </div>

          <div className="mt-20 justify-center md:hidden">
            <div className="py-20 flex flex-col relative bg-gray-800 rounded-[20px] overflow-hidden">
              <div className=" flex-1">
                <div className="mx-auto ">
                  <div className="p-3 w-[350px] mx-auto left-0 top-0 bg-gray-200 rounded-[40px] border-1-[1px] border-gray-100 ">
                    <div className="pt-10 flex flex-col w-full h-full relative bg-black rounded-[40px]">
                      <span className="w-[150px] py-3 absolute left-[50%] top-0 translate-x-[-50%] bg-gray-200 rounded-br-[14px] rounded-bl-[14px]">
                        <span className="mx-auto  w-[60px] h-[5px] block bg-gray-400 rounded-[1px]"></span>
                      </span>

                      <div className="flex justify-center">
                        <PoketSvgWhite />
                      </div>
                      <div className="relative mt-4 flex-1 flex flex-col w-full bg-white rounded-[20px] ">
                        <div className="p-4">
                          <div className="pb-4 flex justify-between border-b-[1px]border-gray-300">
                            <div className="flex items-center gap-[10px]">
                              <p className="text-[12px] text-gray-400">
                                Tailwind Labs, Inc.
                              </p>
                              <p className="text-[14px]">$CSS</p>
                            </div>
                            <button>
                              <PlusIcon />
                            </button>
                          </div>
                          <div className="flex flex-col">
                            <div className=" pt-4 flex items-end justify-between">
                              <div className=" flex items-end gap-2">
                                <span className=" text-[24px]">752.56</span>
                                <span>USD</span>
                              </div>
                              <span className="text-[rgb(6,182,212)]">
                                +12.21%
                              </span>
                            </div>
                            <div className="my-1 flex gap-[8px]">
                              <span className="text-[14px] text-gray-400">
                                1D
                              </span>
                              <span className="text-[14px] text-gray-400">
                                5D
                              </span>
                              <span className="text-[14px] text-[rgb(6,182,212)]">
                                1M
                              </span>
                              <span className="text-[14px] text-gray-400">
                                6M
                              </span>
                              <span className="text-[14px] text-gray-400">
                                1Y
                              </span>
                              <span className="text-[14px] text-gray-400">
                                5Y
                              </span>
                            </div>
                            <div className=" bg-gray-100 rounded-[5px]">
                              <ChartSvg />
                            </div>
                            <button className="py-2  mt-4 w-full text-white bg-[rgb(6,182,212)] rounded-[4px] font-[700]">
                              Trade
                            </button>
                            <ul className="mt-5 flex flex-col justify-between gap-2 ">
                              <li className="flex justify-between">
                                <span className=" text-[14px] text-gray-400">
                                  Open
                                </span>
                                <span className="text-[14px] text-gray-400">
                                  6,387.55
                                </span>
                              </li>
                              <li className="flex justify-between">
                                <span className="text-[14px] text-gray-400">
                                  closed
                                </span>
                                <span className="text-[14px] text-gray-400">
                                  6,487.09
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-12 py-8 w-full absolute bottom-0 bg-gray-800/95 p-6 backdrop-blur ">
                <span>
                  <ListIcon />
                </span>
                <span className=" mt-4 mb-4  block text-[18px] text-white font-[700]">
                  Invest what you want
                </span>
                <p className="text-gray-400">
                  We hide your stock purchases behind thousands of anonymous
                  <br />
                  trading accounts, so suspicious activity can never be traced
                  <br />
                  back to you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
