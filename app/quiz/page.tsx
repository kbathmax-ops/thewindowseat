import type { Metadata } from "next";
import QuizFlow from "@/components/QuizFlow";

export const metadata: Metadata = {
  title: "The Quiz — The Window Seat",
};

export default function QuizPage() {
  return <QuizFlow />;
}
