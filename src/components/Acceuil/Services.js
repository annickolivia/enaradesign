// components/Services/Services.jsx
const services = [
    {
      title: "Architecture et Design d'Intérieur",
      description: "Concevez des espaces uniques...",
      link: "/services/architecture"
    },
    // Other services...
  ];
  
  const Services = () => (
    <section className="mil-bg" style={{ backgroundColor: '#C1B6A4' }}>
      <div className="container mil-p-120-0">
        <h2 className="mil-h1 mil-muted mil-center">
          Des concepts <span className="mil-thin">Exclusifs</span>
        </h2>
        
        <div className="row mil-services-grid">
          {services.map((service, index) => (
            <div key={index} className="col-md-6 col-lg-3 mil-services-grid-item">
              {/* <ServiceCard {...service} /> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  export default Services;