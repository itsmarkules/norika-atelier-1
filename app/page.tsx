import Header from "@/components/Header";
import About from "@/components/About";
import InquiryForm from "@/components/InquiryForm";

export default function HomePage() {
  return (
    <div className="text-taupe">
      <Header />
      <About />
      <InquiryForm />
    </div>
  );
}
