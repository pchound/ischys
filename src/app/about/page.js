import Header from "../global-components/Header";
import AboutIntro from "../about-components/about-intro";
import Footer from "../global-components/Footer";

export default function Home() {
    return (
        <main
            className="flex min-h-screen flex-col bg-white bg-no-repeat"
        >
            <Header />
            <AboutIntro />
            <br></br>
            <br></br>
            <Footer />
        </main>
    );
}
