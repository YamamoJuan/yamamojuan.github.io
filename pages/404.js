import Head from "next/head";
import Link from "next/link";

export default function Custom404() {
    return (
        <>
            <Head>
                <title>Not Found</title>
            </Head>
            <div className="flex flex-col min-h-screen min-w-full">
                <div className="flex flex-grow justify-center items-center">
                    <h1 className="text-4xl md:text-6xl pr-3 mr-4 border-r-2">404</h1>
                    <div className="flex flex-col">
                        <h1 className="text-lg md:text-2xl">This page doesn't exist</h1>
                        <Link className="text-sm md:text-lg hover:cursor-pointer text-[#c6c6c6]" href="/">
                            Go <span className="hover:underline">Home</span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}