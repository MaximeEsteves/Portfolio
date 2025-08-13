// src/components/Projet/Projet.jsx
import "./Projet.scss";
import { useRef, useEffect, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

import Annexe from "./Annexe";
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

import Description from "./Description";
import { Link } from "react-router-dom";
import data from "../../../data.json";
import Card from "./Card";

export default function Projet({ showAll, setShowAll }) {
  const firstExtraRef = useRef(null);
  const lastVisibleRef = useRef(null);
  // nouveau : ref pour le container et timeline
  const containerRef = useRef(null);
  const tlRef = useRef(null);
  const redBallRef = useRef(null);

  const projetsToShow = showAll ? data : data.slice(0, 3);

  // au début du composant
  const showAllRef = useRef(showAll);
  useEffect(() => {
    showAllRef.current = showAll;

    if (showAll) {
      gsap.set(".red-ball", { autoAlpha: 1 });
      if (redBallRef.current) {
        redBallRef.current.style.top = "-7.2%";
      }
    } else {
      if (redBallRef.current) {
        redBallRef.current.style.top = "-13%";
      }
    }
  }, [showAll]);

  // ScrollIntoView pour “Voir plus / Voir moins”
  useEffect(() => {
    if (showAll && firstExtraRef.current) {
      firstExtraRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    if (!showAll && lastVisibleRef.current) {
      lastVisibleRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [showAll]);

  // Création de la timeline une seule fois (useLayoutEffect pour s'assurer après DOM paint)
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          // onUpdate est appelé à chaque scroll : on cache/la montre selon le temps de la timeline
          onUpdate: () => {
            // time du label extraStart (sera défini plus bas)
            const extraStartTime = tl.labels.extraStart || 0;
            // si on a atteint la partie "extra" et que l'utilisateur n'a pas cliqué "voir plus"
            if (!showAllRef.current && tl.time() >= extraStartTime) {
              gsap.set(".red-ball", { autoAlpha: 0 });
            } else {
              gsap.set(".red-ball", { autoAlpha: 1 });
            }
          },
        },
      });

      // 1) départ
      tl.set(".red-ball", {
        x: "0vw",
        y: "0vh",
        width: "1px",
        height: "1px",
        autoAlpha: 1, // visible au départ
      });

      // 2) premier segment (agrandissement + déplacement)
      tl.to(".red-ball", {
        x: "33vw",
        y: "0vh",
        width: "3vw", // au lieu de 71px
        height: "3vw",
        boxShadow: "0 0 74px 47px #e93232",
        backgroundColor: "black",
        ease: "none",
        duration: 0.1,
      });

      // 3) première partie du motionPath (jusqu'à 181vh)
      tl.to(".red-ball", {
        motionPath: {
          path: [
            { x: "41vw", y: "50vh" },
            { x: "-5vw", y: "100vh" },
            { x: "50vw", y: "150vh" },
            { x: "45vw", y: "180vh" },
            { x: "22vw", y: "198vh" }, // fin "normale"
          ],
        },
        ease: "none",
        duration: 0.4,
      });

      // label : début de la trajectoire "extra"
      tl.addLabel("extraStart");

      // 4) deuxième partie (la trajectoire "extra" que tu veux cacher si showAll=false)
      tl.to(".red-ball", {
        motionPath: {
          path: [
            { x: "-5vw", y: "210vh" },
            { x: "50vw", y: "280vh" },
            { x: "-5vw", y: "321vh" },
            { x: "22vw", y: "341vh" },
          ],
        },
        ease: "none",
        duration: 0.3,
      });

      // expose tlRef pour d'éventuelles manipulations
      tlRef.current = tl;
    }, containerRef);

    return () => {
      if (tlRef.current) tlRef.current.kill();
      ctx.revert();
    };
  }, []);

  return (
    <div className="card-home" ref={containerRef} id="projet">
      {/* La boule floue */}
      <div className="red-ball" ref={redBallRef} />
      <h2>Mes projets</h2>
      {projetsToShow.map((profil, index) => {
        const isExtra = showAll && index === 3;
        const isLastVisible = !showAll && index === 2;
        return (
          <div
            className={`card-wrapper${isExtra ? " fade-in" : ""}`}
            key={profil.id + index}
            ref={
              isExtra ? firstExtraRef : isLastVisible ? lastVisibleRef : null
            }
          >
            {index % 2 === 0 ? (
              <>
                <div className="Description">
                  <Description
                    title={profil.title}
                    description={profil.description}
                    specifications={profil.specifications}
                  />
                </div>
                <Link to={`/projet/${profil.id}`}>
                  <Card picture={profil.cover} width="475px" height="258px" />
                </Link>
              </>
            ) : (
              <>
                <Link to={`/projet/${profil.id}`}>
                  <Card picture={profil.cover} width="475px" height="258px" />
                </Link>
                <div className="Description">
                  <Description
                    title={profil.title}
                    description={profil.description}
                    specifications={profil.specifications}
                  />
                </div>
              </>
            )}
          </div>
        );
      })}
      <Annexe visible={showAll} />
      {data.length > 3 && (
        <button
          onClick={() => setShowAll((prev) => !prev)}
          className="voir-plus-btn"
        >
          {showAll ? "Voir moins" : "Voir plus"}
        </button>
      )}
    </div>
  );
}
