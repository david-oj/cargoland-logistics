import ContactHeading from "@/components/layout/ContactHeading";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="font-roboto">
      <ContactHeading />
      <Header />
      {children}
      <Footer />
    </main>
  );
}
