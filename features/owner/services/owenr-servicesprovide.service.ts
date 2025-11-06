import { apiWrapper } from "@/lib/api-wrapper";
import { API } from "@/lib/url";
import { ServiceType } from "../types/service.types";

export const getServicesApi = async () => {
  return apiWrapper<ServiceType[]>(() =>
    API.get("/api/admin/service/get-service")
  );
};
