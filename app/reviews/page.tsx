const reviewServices = [
  "Facility management",
  "Housekeeping",
  "Patient care",
  "Security",
  "Deep cleaning",
  "Gardening & landscaping",
  "Manpower support",
  "Floor care",
  "Team training",
  "Integrated services",
];

export default function ReviewsPage() {
  return (
    <section className="section reviews-page">
      <div className="container">
        <div className="reviews-page-heading">
          <h1>Client reviews</h1>
        </div>
        <div className="testimonials-grid">
          {reviewServices.map((service, index) => (
            <article className="testimonial-card" key={service}>
              <span className="testimonial-mark" aria-hidden="true">&ldquo;</span>
              <span className="testimonial-label">{service}</span>
              <p>Approved client feedback will appear here.</p>
              <div className="testimonial-author">
                <span className="testimonial-avatar" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>
                  <strong>Client name</strong>
                  <small>Organization</small>
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
