import React from 'react';
import { motion } from "framer-motion";
import { FileDown, GraduationCap, ClipboardCheck, Award, BookOpen, ExternalLink } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ParikshaProps {
  isMenuOpen?: boolean;
  isDrawerOpen?: boolean;
}

export default function Pariksha({ isMenuOpen = false, isDrawerOpen = false }: ParikshaProps) {
  const expanded = !isMenuOpen && !isDrawerOpen;

  // Let Vite explicitly trace the external files during build bundling
  const poorthyApplUrl = new URL('../../../../assets/forms/POORTHY_APPL_2024.pdf', import.meta.url).href;
  const varshikaFormUrl = new URL('../../../../assets/forms/VARSHIKA_FORM.pdf', import.meta.url).href;

  const forms = [
    {
      title: "2026 Poorthy Exam Registration",
      description: "Online registration for the 2026 Poorthy Examination.",
      icon: GraduationCap,
      link: "https://docs.google.com/forms/d/e/1FAIpQLSfGe_y1ErOfrNsTlb-51mu0LaL6cPXxbKv38hQFFzxecA5BrQ/viewform",
      isExternal: true,
      buttonText: "Register Online"
    },
    {
      title: "Poorthi Pariksha Application",
      description: "Download the application form for the final completion examination.",
      icon: FileDown,
      link: poorthyApplUrl,
      filename: "POORTHY_APPL_2024.pdf",
      buttonText: "Download Form"
    },
    {
      title: "Varshika Pariksha Form",
      description: "Annual examination form for Vedic students.",
      icon: ClipboardCheck,
      link: varshikaFormUrl,
      filename: "VARSHIKA_FORM.pdf",
      buttonText: "Download Form"
    }
  ];

  // ... rest of your poorthyLevels mapping and layout remains exactly the same as you have it