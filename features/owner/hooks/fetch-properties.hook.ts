import { useAuthStore } from "@/features/auth/store/useAuthStore";
import { useEffect, useState } from "react";
import { getAllOwnPropertiesApi } from "../services/fetch-properties.service";
import { PropertyPaginationResponse } from "../types/property.type";

export const useFetchPropertiesHook = ({ limit = 10 }) => {
  const user = useAuthStore((state) => state.user);

  const [page, setPage] = useState(1);
  const [properties, setProperties] = useState<
    PropertyPaginationResponse["data"]
  >([]);
  const [meta, setMeta] = useState<PropertyPaginationResponse["meta"] | null>(
    null
  );
  const [loading, setLoading] = useState(false);
  const [isPaginating, setIsPaginating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(true);

  const fetchProperties = async (pageNumber = 1) => {
    if (!user?.id) return;

    if (pageNumber === 1) setLoading(true);
    else setIsPaginating(true);

    setError(null);

    try {
      const res = await getAllOwnPropertiesApi({
        id: user.id,
        page: pageNumber,
        limit,
      });

      if (res.status && res.data) {
        const newData = res.data.data;
        const metaData = res.data.meta;

        setProperties((prev) =>
          pageNumber === 1 ? newData : [...prev, ...newData]
        );
        setMeta(metaData);
        setHasMore(metaData.page < metaData.totalPages);
      } else {
        setHasMore(false);
      }
    } catch (err: any) {
      setError(err.message || "Failed to fetch properties");
    } finally {
      setLoading(false);
      setIsPaginating(false);
    }
  };

  const loadMore = () => {
    if (hasMore && !loading && !isPaginating) {
      setPage((prev) => prev + 1);
    }
  };

  const refresh = () => {
    setPage(1);
    fetchProperties(1);
  };

  useEffect(() => {
    if (user?.id) fetchProperties(page);
  }, [user?.id, page]);

  return {
    properties,
    meta,
    loading,
    isPaginating,
    error,
    hasMore,
    loadMore,
    refresh,
  };
};
