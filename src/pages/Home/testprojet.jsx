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
    const mm = gsap.matchMedia();

    // Fabrique une timeline avec valeurs variables selon le breakpoint
    const build = ({ startMove, part1, part2, part1Duration = 0.4 }) => {
      const ctx = gsap.context(() => {
        const tl = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: document.body,
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
            invalidateOnRefresh: true,
            markers: true,
            onUpdate: () => {
              const extraStartTime = tl.labels.extraStart || 0;
              if (!showAllRef.current && tl.time() >= extraStartTime) {
                gsap.set(".red-ball", { autoAlpha: 0 });
              } else {
                gsap.set(".red-ball", { autoAlpha: 1 });
              }
            },
          },
        });

        // état initial
        tl.set(".red-ball", {
          x: "0vw",
          y: "0vh",
          width: "1px",
          height: "1px",
          autoAlpha: 1,
        });

        // agrandissement / premier déplacement (dépend du breakpoint)
        tl.to(".red-ball", {
          x: startMove.x,
          y: startMove.y,
          width: `${startMove.sizeVW}vw`,
          height: `${startMove.sizeVW}vw`,
          boxShadow: startMove.shadow,
          backgroundColor: "black",
          duration: 0.1,
        });

        // trajectoire 1
        tl.to(".red-ball", {
          motionPath: { path: part1 },
          duration: part1Duration,
        });

        // label début extra
        tl.addLabel("extraStart");

        // trajectoire 2
        tl.to(".red-ball", {
          motionPath: { path: part2 },
          duration: 0.3,
        });

        tlRef.current = tl;
      }, containerRef);

      return () => {
        if (tlRef.current) tlRef.current.kill();
        ctx.revert();
      };
    };

    // --- Breakpoints ---

    // Desktop
    mm.add("(min-width: 1441px) and (max-width: 1920px)", () =>
      build({
        startMove: {
          x: "33vw",
          y: "0vh",
          sizeVW: 3,
          shadow: "0 0 74px 47px #e93232",
        },
        part1: [
          { x: "41vw", y: "50vh" },
          { x: "-5vw", y: "100vh" },
          { x: "50vw", y: "150vh" },
          { x: "45vw", y: "180vh" },
          { x: "22vw", y: "198vh" },
        ],
        part2: [
          { x: "-5vw", y: "210vh" },
          { x: "50vw", y: "280vh" },
          { x: "-5vw", y: "321vh" },
          { x: "22vw", y: "341vh" },
        ],
      }),
    );
    // Desktop
    mm.add("(min-width: 1281px) and (max-width: 1440px)", () =>
      build({
        startMove: {
          x: "42vw",
          y: "0vh",
          sizeVW: 3,
        },
        part1: [
          { x: "45vw", y: "50vh" },
          { x: "-5vw", y: "100vh" },
          { x: "50vw", y: "150vh" },
          { x: "45vw", y: "180vh" },
          { x: "28.5vw", y: "198vh" },
        ],
        part2: [
          { x: "-5vw", y: "220vh" },
          { x: "50vw", y: "290vh" },
          { x: "-5vw", y: "331vh" },
          { x: "28.5vw", y: "369vh" },
        ],
      }),
    );
    // Desktop
    mm.add("(min-width: 1025px) and (max-width: 1280px)", () =>
      build({
        startMove: {
          x: "53vw",
          y: "0vh",
          sizeVW: 3,
          shadow: "0 0 74px 47px #e93232",
        },
        part1: [
          { x: "57vw", y: "50vh" },
          { x: "-5vw", y: "100vh" },
          { x: "60vw", y: "150vh" },
          { x: "65vw", y: "180vh" },
          { x: "34.5vw", y: "200vh" },
        ],
        part2: [
          { x: "-5vw", y: "220vh" },
          { x: "60vw", y: "290vh" },
          { x: "-5vw", y: "331vh" },
          { x: "34.5vw", y: "368.5vh" },
        ],
      }),
    );
    // Desktop
    // TABLETTE : 768–1024
    mm.add("(min-width: 769px) and (max-width: 1024px)", () =>
      build({
        startMove: {
          x: "55vw", // départ centré
          y: "0vh", // plus bas au démarrage
          sizeVW: 4, // un poil plus gros pour mieux la voir
          shadow: "0 0 74px 47px #e93232",
        },
        part1: [
          { x: "60vw", y: "60vh" }, // descend au bas du viewport
          { x: "34.5vw", y: "80vh" }, // descend au bas du viewport
          { x: "20vw", y: "100vh" }, // descend au bas du viewport
          { x: "34.5vw", y: "120vh" }, // descend au bas du viewport
          { x: "60vw", y: "150vh" }, // descend au bas du viewport
          { x: "34.5vw", y: "182vh" }, // descend au bas du viewport
        ],
        part2: [
          { x: "10vw", y: "220vh" },
          { x: "34.5vw", y: "260vh" },
          { x: "60vw", y: "310vh" },
          { x: "34.5vw", y: "350vh" },
        ],
        part1Duration: 0.2,
      }),
    );

    // Mobile
    mm.add("(max-width: 768px)", () =>
      build({
        startMove: {
          x: "60vw",
          y: "50vh",
          sizeVW: 4,
          shadow: "0 0 74px 47px #e93232",
        },
        part1: [
          { x: "50vw", y: "100vh" }, // descend au bas du viewport
          { x: "38vw", y: "312vh" }, // descend au bas du viewport
        ],
        part2: [
          { x: "50vw", y: "360vh" },
          { x: "50vw", y: "460vh" },
          { x: "50vw", y: "560vh" },
          { x: "38vw", y: "671vh" },
        ],
        part1Duration: 0.5,
      }),
    );
    // Accessibilité : désactiver si motion réduit
    mm.add("(prefers-reduced-motion: reduce)", () => {
      const ctx = gsap.context(
        () => gsap.set(".red-ball", { autoAlpha: 0 }),
        containerRef,
      );
      return () => ctx.revert();
    });

    requestAnimationFrame(() => ScrollTrigger.refresh());

    return () => {
      if (tlRef.current) tlRef.current.kill();
      mm.revert();
    };
  }, []);

  return (
    <div className="card-home" ref={containerRef} id="projet">
      {/* La boule floue */}
      <div className="red-ball" ref={redBallRef} />
      <h2 className="titre-projet">Mes projets</h2>
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
