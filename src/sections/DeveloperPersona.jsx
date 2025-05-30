// persona.jsx
import { persona } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

const DeveloperPersona = () => {
  return (
    <section id="persona" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="My Development Approach"
          sub="⭐️ Philosophy and working style"
        />

        {/* Changed to grid layout with equal spacing */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-16">
          {persona.map((testimonial, index) => (
            <GlowCard card={testimonial} key={index} index={index}>
              <div className="flex items-center gap-3">
                <div>
                  <img src={testimonial.imgPath} alt="" />
                </div>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-white-50">{testimonial.mentions}</p>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeveloperPersona;