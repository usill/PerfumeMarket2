'client component'

import { Metadata } from "next";
import { InitDefaultCarousel } from "@/helper/CarouselHelper";
import Carousel from "@/components/Carousel";
import 'flowbite/dist/flowbite.css';

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
    <Carousel></Carousel>
  );
}
