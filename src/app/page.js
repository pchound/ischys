import Navbar from "./global-components/Navbar";
import Video from "./home-components/Video";
import Section1 from "./home-components/Section1";
import Footer from "./global-components/Footer";

export default function Home() {
    return (
        <main
            className="flex min-h-screen flex-col bg-white bg-no-repeat"
        >
            <Navbar />
            <Video />
            <br></br>
            <Section1 />
            <br></br>
            <Footer />
        </main>
    );
}