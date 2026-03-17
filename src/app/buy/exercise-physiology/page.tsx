import type { Metadata } from "next";
import { SalesPageContent } from "@/components/sales-page-content";
import { salesPages } from "@/content/product";

const data = salesPages["exercise-physiology"];

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  alternates: { canonical: "/buy/exercise-physiology" },
};

export default function BuyExercisePhysiologyPage() {
  return <SalesPageContent professionKey="exercise-physiology" />;
}
