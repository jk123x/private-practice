import type { Metadata } from "next";
import { SalesPageContent } from "@/components/sales-page-content";
import { salesPages } from "@/content/product";

const data = salesPages["physiotherapy"];

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  alternates: { canonical: "/buy/physiotherapy" },
};

export default function BuyPhysiotherapyPage() {
  return <SalesPageContent professionKey="physiotherapy" />;
}
