"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p>
        I'm a tech aficionado and adept web developer. Guiding IEEE CS SBC and
        co-heading IEDC SNGCE fueled my zeal for innovation. As CTO, I steer
        tech advancement while my role as Webmaster for IEEE PES Kerala
        harmonizes tech and communication. My journey signifies leadership,
        innovation, and an unwavering commitment to shaping a constructive tech
        realm.
      </p>
    </motion.section>
  );
}
