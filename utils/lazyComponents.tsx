// utils/lazyComponents.tsx - Lazy load heavy components
import dynamic from "next/dynamic";
import { Loader2 } from "lucide-react";

// Loading component
const ComponentLoader = () => (
  <div className="flex items-center justify-center min-h-[200px]">
    <Loader2 className="h-6 w-6 animate-spin text-white" />
  </div>
);

// Lazy load heavy components
export const LazyGlobeDemo = dynamic(
  () =>
    import("@/components/ui/GlobeUse").then((mod) => ({
      default: mod.GlobeDemo,
    })),
  {
    loading: ComponentLoader,
    ssr: false, // Disable SSR for heavy 3D components
  }
);

export const LazyLampDemo = dynamic(
  () =>
    import("@/components/LampDemo").then((mod) => ({ default: mod.LampDemo })),
  {
    loading: ComponentLoader,
    ssr: false,
  }
);

export const LazyPaymentTransferLamp = dynamic(
  () =>
    import("@/components/PaymentTransferLamp").then((mod) => ({
      default: mod.PaymentTransferLamp,
    })),
  {
    loading: ComponentLoader,
    ssr: false,
  }
);

export const LazyMyBanksLamp = dynamic(
  () =>
    import("@/components/MyBanksLamp").then((mod) => ({
      default: mod.MyBanksLamp,
    })),
  {
    loading: ComponentLoader,
    ssr: false,
  }
);

export const LazyPaymentHistoryLamp = dynamic(
  () =>
    import("@/components/PaymentHistoryLamp").then((mod) => ({
      default: mod.PaymentHistoryLamp,
    })),
  {
    loading: ComponentLoader,
    ssr: false,
  }
);

export const LazyDoughnutChart = dynamic(
  () => import("@/components/DoughnutChart"),
  {
    loading: ComponentLoader,
    ssr: false,
  }
);

export const LazyTransactionsTable = dynamic(
  () => import("@/components/TransactionsTable"),
  {
    loading: ComponentLoader,
  }
);
