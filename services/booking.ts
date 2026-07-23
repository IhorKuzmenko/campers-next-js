import { api } from "@/lib/axios";
import { BookingFormData } from "@/types/booking";

export const createBooking = async (
  camperId: string,
  data: BookingFormData,
) => {
  const response = await api.post(`/campers/${camperId}/bookings`, data);

  return response.data;
};
