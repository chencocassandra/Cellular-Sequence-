import { StaticPage } from "@/components/StaticPage";
import { pageSeo } from "@/lib/marketing";

export const metadata = {
  title: pageSeo.about.title,
  description: pageSeo.about.description,
};

export default function Page() {
  return <StaticPage path="/about" />;
}
