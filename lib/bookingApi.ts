import { api } from "./axios";

import { BookingFormData } from "@/types/booking";

export const createBookingRequest = async (
  camperId: string,
  data: BookingFormData,
) => {
  const response = await api.post(
    `/campers/${camperId}/booking-requests`,
    data,
  );

  return response.data;
};
