import ContactHeading from "@/components/layout/ContactHeading";
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
    </main>
  );
}
