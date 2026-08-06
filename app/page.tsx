import Header from "@/components/Header";
import About from "@/components/About";
import InquiryForm from "@/components/InquiryForm";

export default function HomePage() {
  return (
    <main className="overflow-x-hidden bg-white text-[#2e2620]">
      <Header />
      <About />
      <InquiryForm />
    </main>
  );
}
