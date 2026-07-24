import CamperPage from "./CamperPage";

interface Props {
  params: Promise<{
    camperId: string;
  }>;
}

export default async function Page({ params }: Props) {
  const { camperId } = await params;

  return <CamperPage camperId={camperId} />;
}
