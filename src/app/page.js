import Header from "./global-components/Header";
import Video from "./home-components/Video";
import TeenDepression from "./home-components/teen-depression";
import Section2 from "./home-components/Section2";
import Section3 from "./home-components/Section3";
import Footer from "./global-components/Footer";

export default function Home() {
    return (
        <main
            className="flex min-h-screen flex-col bg-white bg-no-repeat"
        >
            <Header />
            <Video />
            <br></br>
            <Section2 />
            <br></br>
            <Section3 />
            <br></br>
            <TeenDepression />
            <br></br>
            <Footer />
        </main>
    );
}