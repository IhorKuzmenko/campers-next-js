"use client";

import { useState, useEffect } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";

import Filters from "@/components/catalog/Filters/Filters";
import CamperList from "@/components/catalog/CamperList/CamperList";
import Loader from "@/components/ui/Loader/Loader";
import EmptyState from "@/components/catalog/EmptyState/EmptyState";

import { getCampers } from "@/services/campers";

import css from "./CatalogPage.module.css";

export interface CatalogFilters {
  location: string;
  form: string;
  engine: string;
  transmission: string;
}

export default function CatalogClient() {
  const [filters, setFilters] = useState({
    location: "",
    form: "",
    engine: "",
    transmission: "",
  });

  const {
    data,
    isLoading,
    isFetching,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["campers", filters],

    initialPageParam: 1,

    queryFn: ({ pageParam }) =>
      getCampers({
        page: pageParam,
        limit: 4,

        location: filters.location || undefined,
        form: filters.form || undefined,
        engine: filters.engine || undefined,
        transmission: filters.transmission || undefined,
      }),

    getNextPageParam: (lastPage) => {
      if (lastPage.page < lastPage.totalPages) {
        return lastPage.page + 1;
      }

      return undefined;
    },
  });

  useEffect(() => {
    const isModalOpen = isLoading || (isFetching && !isFetchingNextPage);

    if (isModalOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }

    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [isLoading, isFetching, isFetchingNextPage]);

  const campers = data?.pages.flatMap((page) => page.campers) ?? [];

  if (error) {
    return <p>Something went wrong</p>;
  }

  return (
    <>
      {(isLoading || (isFetching && !isFetchingNextPage)) && <Loader />}

      <div className={css.wrapper}>
        <Filters
          onSearch={(newFilters) => {
            setFilters(newFilters);
          }}
        />

        <div className={css.content}>
          {campers.length > 0 ? (
            <CamperList campers={campers} />
          ) : (
            <EmptyState
              onClear={() => {
                setFilters({
                  location: "",
                  form: "",
                  engine: "",
                  transmission: "",
                });
              }}

              onViewAll={() => {
                setFilters({
                  location: "",
                  form: "",
                  engine: "",
                  transmission: "",
                });
              }}
            />
          )}

          {hasNextPage && (
            <button
              className={css.loadButton}
              onClick={() => fetchNextPage()}
              disabled={isFetchingNextPage}
            >
              {isFetchingNextPage ? "Loading..." : "Load More"}
            </button>
          )}
        </div>
      </div>
    </>
  );
}
