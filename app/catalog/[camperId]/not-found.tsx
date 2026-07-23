import EmptyState from "@/components/catalog/EmptyState/EmptyState";

export default function NotFound() {
  return (
    <EmptyState
      onClear={() => {}}
      onViewAll={() => {}}
    />
  );
}