import TestimonialSlider from "@/components/homepage/testimonialSection/TestimonialSlider";

const TestimonialSection = () => {
  return (
    <div className="testimonial-section">
      <div className="container">
        <div className="testimonial-section__content">
          <h2 className="testimonial-section__title">What our customers say</h2>
          <div className="testimonial-section__slider">
            <TestimonialSlider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
