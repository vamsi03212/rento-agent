import { apiWrapper } from "../../../lib/api-wrapper";
import { API } from "../../../lib/url";
import { PropertyPaginationResponse } from "../types/property.type";

export const getAllOwnPropertiesApi = async ({
  id,
  page = 1,
  limit = 10,
}: {
  id: number;
  page?: number;
  limit?: number;
}) => {
  return apiWrapper<PropertyPaginationResponse>(() =>
    API.get(`/api/owner/get-property/new/${id}?page=${page}&limit=${limit}`)
  );
};
