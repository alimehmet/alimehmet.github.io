"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";

const skills = [
  { name: "Advanced SQL & Database Design", level: 98 },
  { name: "Relational Databases (MySQL, PostgreSQL, MSSQL, Oracle)", level: 92 },
  { name: "Backend Development (Java & Spring)", level: 88 },
  { name: "DevOps & CI/CD (GitLab, Docker, SonarQube)", level: 92 },
  { name: "Linux / Ubuntu & Server Management", level: 83 },
  { name: "Cloud Platforms & Distributed Systems (AWS, Elasticsearch)", level: 72 },
  { name: "Python & Scripting", level: 68 },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden cursor-default">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-0 w-80 h-80 bg-[#5d2d88]/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
          >
            About Me
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Who I Am
          </h2>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* About Text */}
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            {personalInfo.aboutText.map((text, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                className={`text-lg ${
                  index === 1
                    ? "text-2xl md:text-3xl font-bold text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {text}
              </motion.p>
            ))}
          </div>

          {/* Location Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex justify-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border text-muted-foreground">
              <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {personalInfo.location}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="pt-8"
          >
            <h3 className="text-xl font-semibold text-foreground mb-8 text-center">
              Skills & Expertise
            </h3>
            <div className="space-y-5">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + index * 0.08, duration: 0.4 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-foreground">
                      {skill.name}
                    </span>
                    <span className="text-sm font-semibold text-primary">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full relative overflow-hidden"
                      style={{
                        background: `linear-gradient(90deg, #4d8439 0%, #6ba354 ${skill.level}%)`,
                      }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.8 + index * 0.08,
                        duration: 1,
                        ease: "easeOut",
                      }}
                    >
                      {/* Shine effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        initial={{ x: "-100%" }}
                        whileInView={{ x: "100%" }}
                        viewport={{ once: true }}
                        transition={{
                          delay: 1.2 + index * 0.08,
                          duration: 0.8,
                          ease: "easeInOut",
                        }}
                      />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
