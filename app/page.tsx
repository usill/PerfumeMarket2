import { Metadata } from "next";
import Carousel from "@/components/Carousel";
import DifferentSizeBlocks from "@/components/DifferentSizeBlocks";
import { BiHeart } from "react-icons/bi";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

export const metadata: Metadata = {
  title: "My Site",
  description: "This is my site",
  openGraph: {
    url: "https://example.com",
    title: "Home Page",
    description: "Description of my home page",
    images: [
      {
        url: "https://example.com/image.jpg",
        width: 1200,
        height: 630,
        alt: "Image description",
      },
    ],
  },
};

export default function Page() {
  return (
    <div>
      <Carousel></Carousel>
      <DifferentSizeBlocks></DifferentSizeBlocks>
      <div className="mt-12 text-center">
        <h2 className="text-4xl font-bold text-gray-700">Новые поступления</h2>
        <span className="text-sm text-gray-500">
          Самые новые поступления для вас
        </span>
        <div className="flex justify-between mb-4">
          <button>
            <FaAngleLeft size={32} className="text-red-500"></FaAngleLeft>
          </button>
          <button>
            <FaAngleRight size={32} className="text-red-500"></FaAngleRight>
          </button>
        </div>
        <div className="relative h-96 lg:h-2big md:h-big xl:h-large overflow-hidden">
          <div className="absolute h-full w-full flex gap-4">
            <div className="min-w-33 h-full flex flex-col">
              <div className="h-1/2 w-full flex flex-col">
                <div className="h-4/5 w-full bg-gray-300"></div>
                <div className="flex mt-3 ">
                  <div className="grow text-left overflow-hidden mr-2">
                    <p className="text-red-600 text-base font-light">БРЕНД</p>
                    <a
                      href="/"
                      className="text-gray-700 text-xl font-semibold mt-1 hover:text-red-500 duration-300 ease-in-out"
                    >
                      Название
                    </a>
                    <div className="flex mt-2 text-sm">
                      <p className="text-gray-600 font-semibold">3 000 ₽</p>
                      <del className="text-gray-400 font-semibold ml-2">
                        12 000 ₽
                      </del>
                    </div>
                  </div>
                  <button className="flex items-center h-fit my-auto hover:text-red-600 duration-300 ease-in-out mr-2">
                    <BiHeart size={24}></BiHeart>
                  </button>
                </div>
              </div>
              <div className="h-1/2 w-full flex flex-col">
                <div className="h-4/5 w-full bg-gray-300"></div>
                <div className="flex mt-3 ">
                  <div className="grow text-left overflow-hidden mr-2">
                    <p className="text-red-600 text-base font-light">БРЕНД</p>
                    <a
                      href="/"
                      className="text-gray-700 text-xl font-semibold mt-1 hover:text-red-500 duration-300 ease-in-out"
                    >
                      Название
                    </a>
                    <div className="flex mt-2 text-sm">
                      <p className="text-gray-600 font-semibold">3 000 ₽</p>
                      <del className="text-gray-400 font-semibold ml-2">
                        12 000 ₽
                      </del>
                    </div>
                  </div>
                  <button className="flex items-center h-fit my-auto hover:text-red-600 duration-300 ease-in-out mr-2">
                    <BiHeart size={24}></BiHeart>
                  </button>
                </div>
              </div>
            </div>
            <div className="min-w-33 h-full flex flex-col">
              <div className="h-1/2 w-full flex flex-col">
                <div className="h-4/5 w-full bg-gray-300"></div>
                <div className="flex mt-3 ">
                  <div className="grow text-left overflow-hidden mr-2">
                    <p className="text-red-600 text-base font-light">БРЕНД</p>
                    <a
                      href="/"
                      className="text-gray-700 text-xl font-semibold mt-1 hover:text-red-500 duration-300 ease-in-out"
                    >
                      Название
                    </a>
                    <div className="flex mt-2 text-sm">
                      <p className="text-gray-600 font-semibold">3 000 ₽</p>
                      <del className="text-gray-400 font-semibold ml-2">
                        12 000 ₽
                      </del>
                    </div>
                  </div>
                  <button className="flex items-center h-fit my-auto hover:text-red-600 duration-300 ease-in-out mr-2">
                    <BiHeart size={24}></BiHeart>
                  </button>
                </div>
              </div>
              <div className="h-1/2 w-full flex flex-col">
                <div className="h-4/5 w-full bg-gray-300"></div>
                <div className="flex mt-3 ">
                  <div className="grow text-left overflow-hidden mr-2">
                    <p className="text-red-600 text-base font-light">БРЕНД</p>
                    <a
                      href="/"
                      className="text-gray-700 text-xl font-semibold mt-1 hover:text-red-500 duration-300 ease-in-out"
                    >
                      Название
                    </a>
                    <div className="flex mt-2 text-sm">
                      <p className="text-gray-600 font-semibold">3 000 ₽</p>
                      <del className="text-gray-400 font-semibold ml-2">
                        12 000 ₽
                      </del>
                    </div>
                  </div>
                  <button className="flex items-center h-fit my-auto hover:text-red-600 duration-300 ease-in-out mr-2">
                    <BiHeart size={24}></BiHeart>
                  </button>
                </div>
              </div>
            </div>
            <div className="min-w-33 h-full flex flex-col">
              <div className="h-1/2 w-full flex flex-col">
                <div className="h-4/5 w-full bg-gray-300"></div>
                <div className="flex mt-3 ">
                  <div className="grow text-left overflow-hidden mr-2">
                    <p className="text-red-600 text-base font-light">БРЕНД</p>
                    <a
                      href="/"
                      className="text-gray-700 text-xl font-semibold mt-1 hover:text-red-500 duration-300 ease-in-out"
                    >
                      Название
                    </a>
                    <div className="flex mt-2 text-sm">
                      <p className="text-gray-600 font-semibold">3 000 ₽</p>
                      <del className="text-gray-400 font-semibold ml-2">
                        12 000 ₽
                      </del>
                    </div>
                  </div>
                  <button className="flex items-center h-fit my-auto hover:text-red-600 duration-300 ease-in-out mr-2">
                    <BiHeart size={24}></BiHeart>
                  </button>
                </div>
              </div>
              <div className="h-1/2 w-full flex flex-col">
                <div className="h-4/5 w-full bg-gray-300"></div>
                <div className="flex mt-3 ">
                  <div className="grow text-left overflow-hidden mr-2">
                    <p className="text-red-600 text-base font-light">БРЕНД</p>
                    <a
                      href="/"
                      className="text-gray-700 text-xl font-semibold mt-1 hover:text-red-500 duration-300 ease-in-out"
                    >
                      Название
                    </a>
                    <div className="flex mt-2 text-sm">
                      <p className="text-gray-600 font-semibold">3 000 ₽</p>
                      <del className="text-gray-400 font-semibold ml-2">
                        12 000 ₽
                      </del>
                    </div>
                  </div>
                  <button className="flex items-center h-fit my-auto hover:text-red-600 duration-300 ease-in-out mr-2">
                    <BiHeart size={24}></BiHeart>
                  </button>
                </div>
              </div>
            </div>
            <div className="min-w-33 h-full flex flex-col">
              <div className="h-1/2 w-full flex flex-col">
                <div className="h-4/5 w-full bg-gray-300"></div>
                <div className="flex mt-3 ">
                  <div className="grow text-left overflow-hidden mr-2">
                    <p className="text-red-600 text-base font-light">БРЕНД</p>
                    <a
                      href="/"
                      className="text-gray-700 text-xl font-semibold mt-1 hover:text-red-500 duration-300 ease-in-out"
                    >
                      Название
                    </a>
                    <div className="flex mt-2 text-sm">
                      <p className="text-gray-600 font-semibold">3 000 ₽</p>
                      <del className="text-gray-400 font-semibold ml-2">
                        12 000 ₽
                      </del>
                    </div>
                  </div>
                  <button className="flex items-center h-fit my-auto hover:text-red-600 duration-300 ease-in-out mr-2">
                    <BiHeart size={24}></BiHeart>
                  </button>
                </div>
              </div>
              <div className="h-1/2 w-full flex flex-col">
                <div className="h-4/5 w-full bg-gray-300"></div>
                <div className="flex mt-3 ">
                  <div className="grow text-left overflow-hidden mr-2">
                    <p className="text-red-600 text-base font-light">БРЕНД</p>
                    <a
                      href="/"
                      className="text-gray-700 text-xl font-semibold mt-1 hover:text-red-500 duration-300 ease-in-out"
                    >
                      Название
                    </a>
                    <div className="flex mt-2 text-sm">
                      <p className="text-gray-600 font-semibold">3 000 ₽</p>
                      <del className="text-gray-400 font-semibold ml-2">
                        12 000 ₽
                      </del>
                    </div>
                  </div>
                  <button className="flex items-center h-fit my-auto hover:text-red-600 duration-300 ease-in-out mr-2">
                    <BiHeart size={24}></BiHeart>
                  </button>
                </div>
              </div>
            </div>
            <div className="min-w-33 h-full flex flex-col">
              <div className="h-1/2 w-full flex flex-col">
                <div className="h-4/5 w-full bg-gray-300"></div>
                <div className="flex mt-3 ">
                  <div className="grow text-left overflow-hidden mr-2">
                    <p className="text-red-600 text-base font-light">БРЕНД</p>
                    <a
                      href="/"
                      className="text-gray-700 text-xl font-semibold mt-1 hover:text-red-500 duration-300 ease-in-out"
                    >
                      Название
                    </a>
                    <div className="flex mt-2 text-sm">
                      <p className="text-gray-600 font-semibold">3 000 ₽</p>
                      <del className="text-gray-400 font-semibold ml-2">
                        12 000 ₽
                      </del>
                    </div>
                  </div>
                  <button className="flex items-center h-fit my-auto hover:text-red-600 duration-300 ease-in-out mr-2">
                    <BiHeart size={24}></BiHeart>
                  </button>
                </div>
              </div>
              <div className="h-1/2 w-full flex flex-col">
                <div className="h-4/5 w-full bg-gray-300"></div>
                <div className="flex mt-3 ">
                  <div className="grow text-left overflow-hidden mr-2">
                    <p className="text-red-600 text-base font-light">БРЕНД</p>
                    <a
                      href="/"
                      className="text-gray-700 text-xl font-semibold mt-1 hover:text-red-500 duration-300 ease-in-out"
                    >
                      Название
                    </a>
                    <div className="flex mt-2 text-sm">
                      <p className="text-gray-600 font-semibold">3 000 ₽</p>
                      <del className="text-gray-400 font-semibold ml-2">
                        12 000 ₽
                      </del>
                    </div>
                  </div>
                  <button className="flex items-center h-fit my-auto hover:text-red-600 duration-300 ease-in-out mr-2">
                    <BiHeart size={24}></BiHeart>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
