import { StaticPage } from "@/components/StaticPage";
import { pageSeo } from "@/lib/marketing";

export const metadata = {
  title: pageSeo.privacy.title,
  description: pageSeo.privacy.description,
};

export default function Page() {
  return <StaticPage path="/privacy" />;
}
