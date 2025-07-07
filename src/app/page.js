import Image from "next/image";
import Navbar from "./global-components/Navbar";
import Video from "./home-components/Video";

export default function Home() {
    return (
        <main
            className="flex min-h-screen flex-col bg-white bg-no-repeat"
        >
            <Navbar />
            <Video />


            <div className="bg-gradient-to-b from-[#f5deb3] to-[#d2b48c] p-10 text-center text-black">
                Hello
            </div>

        </main>
    );
}