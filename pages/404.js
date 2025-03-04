import Head from "next/head";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonRunning } from "@fortawesome/free-solid-svg-icons";

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
                        <h1 className="text-lg md:text-2xl">This page doesn't exists</h1>
                        <Link className="text-sm md:text-lg hover:text-[#eba0ac] hover:underline hover:cursor-pointer text-[#c6c6c6]" href="/">
                        <FontAwesomeIcon className="md:text-xl me-1" icon={faPersonRunning} fontSize={16} />
                            Home
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}