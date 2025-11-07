import { apiWrapper } from "../../../lib/api-wrapper";
import { API } from "../../../lib/url";
import { PropertyPaginationResponse } from "../types/property.type";

export const getAllOwnPropertiesApi = async ({
  id,
  page = 1,
  limit = 10,
  search = "",
}: {
  id: number;
  page?: number;
  limit?: number;
  search?: string;
}) => {
  const params = new URLSearchParams({
    page: String(page),
    limit: String(limit),
  });
  if (search) params.append("search", search);

  return apiWrapper<PropertyPaginationResponse>(() =>
    API.get(`/api/owner/get-property/new/${id}?${params.toString()}`)
  );
};
