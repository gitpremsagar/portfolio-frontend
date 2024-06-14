const ContactForm = () => {
  return (
    <form className="flex flex-col p-20 border rounded-lg mt-10 w-full">
      <InputField
        label="Your Name"
        type="text"
        name="name"
        placeholder="Your Name"
        required={true}
      />

      <InputField
        label="Your Email"
        type="email"
        name="email"
        placeholder="Your Email"
        required={true}
      />

      <HtmlLabel label="Your Message" htmlFor="message" />
      <textarea
        name="message"
        placeholder="Your Message"
        id="message"
        required
        className="border rounded-lg p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full"
        rows={10}
      ></textarea>
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out max-w-fit-content self-start px-5"
      >
        Send
      </button>
    </form>
  );
};

const InputField = ({
  label,
  type,
  name,
  placeholder,
  required,
}: {
  label: string;
  type: string;
  name: string;
  placeholder: string;
  required: boolean;
}) => {
  return (
    <>
      <HtmlLabel label={label} htmlFor={name} />
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        required={required}
        className="border rounded-lg p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full"
      />
    </>
  );
};

const HtmlLabel = ({ label, htmlFor }: { label: string; htmlFor: string }) => {
  return (
    <label className="text-gray-600 font-semibold mb-2" htmlFor={htmlFor}>
      {label}
    </label>
  );
};

export default ContactForm;
