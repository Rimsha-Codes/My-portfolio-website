// GlowCard.jsx
import { useRef } from "react";

const GlowCard = ({ card, index, children }) => {
  const cardRefs = useRef([]);

  const handleMouseMove = (index) => (e) => {
    const card = cardRefs.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
    angle = (angle + 360) % 360;

    card.style.setProperty("--start", angle + 60);
  };

  return (
    <div
      ref={(el) => (cardRefs.current[index] = el)}
      onMouseMove={handleMouseMove(index)}
      className="card card-border timeline-card rounded-xl p-10 h-full relative" // Added h-full and relative
    >
      <div className="glow"></div>
      <div className="h-full flex flex-col"> {/* Added flex container */}
        {/* Star Icons */}
        <div className="flex items-center gap-1 mb-5">
          {Array.from({ length: 5 }, (_, i) => (
            <img key={i} src="/images/star.png" alt="star" className="size-5" />
          ))}
        </div>

        {/* Content */}
        <div className="mb-5 flex-grow"> {/* Added flex-grow */}
          <h3 className="text-xl font-semibold text-white mb-3">{card.name}</h3>
          <p className="text-white-50 text-lg">{card.review}</p>
        </div>
        
        {/* Children content (if any) */}
        {children}
      </div>
    </div>
  );
};

export default GlowCard;