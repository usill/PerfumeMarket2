import Image from "next/image"
import NextImage from "../../public/next.svg"
import { Suspense } from "react";

export default async function Page() {

    async function getData() {
        await setTimeout(() => {
            console.log(1)
        }, 3000)
    }

    await getData();

    return (
        <>
            <Image src={NextImage} alt="123"></Image>
            <h1>my products</h1>
        </>
    )
}