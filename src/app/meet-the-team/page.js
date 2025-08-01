import Header from "../global-components/Header";
import Intro from "../meet-the-team-components/Intro";
import Team from "../meet-the-team-components/Team";
import Footer from "../global-components/Footer";



export default function Home() {
    return (
        <main
            className="flex min-h-screen flex-col bg-white bg-no-repeat"
        >
            <Header />
            <Intro />
            <Team />
            <br></br>
            <Footer />
        </main>
    );
}
