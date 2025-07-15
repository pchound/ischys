import Header from "../global-components/Header";
import ContactIntro from "../contact-components/contact-intro";
import ContactForm from "../contact-components/contact-form";
import Footer from "../global-components/Footer";

export default function Home() {
    return (
        <main
            className="flex min-h-screen flex-col bg-white bg-no-repeat"
        >
            <Header />
            <ContactIntro />
            <ContactForm />
            <br></br>
            <br></br>
            <Footer />
        </main>
    );
}
