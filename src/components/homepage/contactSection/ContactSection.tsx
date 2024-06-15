import ResponsiveH2 from "@/components/customUIs/ResponsiveH2";
import ContactForm from "@/components/homepage/contactSection/ContactForm";

const ContactSection: React.FC = () => {
  return (
    <section className="py-12" id="contactSection">
      <div className="">
        <div className="flex flex-col">
          <ResponsiveH2>Contact</ResponsiveH2>
          <p className="text-gray-600 text-lg text-center mb-10">
            I am available for freelance work. Just drop me a message and I will
            reach out to you.
          </p>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
