"use client";

import css from "./BookingForm.module.css";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "sonner";

import { bookingSchema } from "@/shemas/bookingForm.schema";
import { BookingFormData } from "@/types/booking";

import { createBookingRequest } from "@/lib/bookingApi";

interface BookingFormProps {
  camperId: string;
}

export default function BookingForm({ camperId }: BookingFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<BookingFormData>({
    resolver: yupResolver(bookingSchema),

    mode: "onBlur",
    reValidateMode: "onChange",

    defaultValues: {
      name: "",
      email: "",
    },
  });

  const onSubmit = async (data: BookingFormData) => {
    try {
      await createBookingRequest(camperId, data);

      toast.success("Booking request sent successfully!");

      reset();
    } catch {
      toast.error("Failed to send booking request.");
    }
  };

  return (
    <form className={css.form} onSubmit={handleSubmit(onSubmit)} noValidate>
      <h2 className={css.title}>Book your campervan now</h2>

      <p className={css.subtitle}>
        Stay connected! We are always ready to help you.
      </p>

      <div className={css.field}>
        <div className={css.inputWrapper}>
          <input
            type="text"
            placeholder="Name*"
            className={`${css.input} ${errors.name ? css.inputError : ""}`}
            {...register("name")}
          />

          {errors.name && (
            <svg className={css.errorIcon} width="20" height="20">
              <use href="/icons/sprite.svg#error" />
            </svg>
          )}
        </div>

        {errors.name && (
          <span className={css.error}>{errors.name.message}</span>
        )}
      </div>

      <div className={css.field}>
        <div className={css.inputWrapper}>
          <input
            type="email"
            placeholder="Email*"
            className={`${css.input} ${errors.email ? css.inputError : ""}`}
            {...register("email")}
          />

          {errors.email && (
            <svg className={css.errorIcon} width="20" height="20">
              <use href="/icons/sprite.svg#error" />
            </svg>
          )}
        </div>

        {errors.email && (
          <span className={css.error}>{errors.email.message}</span>
        )}
      </div>

      <button type="submit" className={css.button} disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send"}
      </button>
    </form>
  );
}
