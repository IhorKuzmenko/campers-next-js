import { api } from "@/lib/axios";

import { Camper, CampersResponse, CamperFilters } from "@/types/camper";

export interface GetCampersParams {
  page?: number;
  limit?: number;
  location?: string;
  form?: string;
  transmission?: string;
  engine?: string;
}

export async function getCampers(
  params?: GetCampersParams,
): Promise<CampersResponse> {
  const { data } = await api.get("/campers", {
    params,
  });

  return data;
}

export async function getCamperById(camperId: string): Promise<Camper> {
  const { data } = await api.get(`/campers/${camperId}`);

  return data;
}

export async function getFilters(): Promise<CamperFilters> {
  const { data } = await api.get("/campers/filters");

  return data;
}
