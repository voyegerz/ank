import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Query } from "appwrite";
import careersService from "../appwrite/services/careers";

// Query Keys
export const careerKeys = {
  all: ["careers"] as const,
  vacancies: ["careers", "vacancies"] as const,
  applications: ["careers", "applications"] as const,
};

// --- VACANCIES ---

export const useVacancies = (activeOnly = false) => {
  return useQuery({
    queryKey: [...careerKeys.vacancies, activeOnly ? "active" : "all"],
    queryFn: async () => {
      const queries: string[] = [];
      if (activeOnly) {
        queries.push(Query.equal("is_active", true));
      }
      const response = await careersService.getVacancies(queries);
      return response.documents;
    },
  });
};

export const useCreateVacancy = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: any) => careersService.createVacancy(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: careerKeys.vacancies });
    },
  });
};

export const useUpdateVacancy = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: any }) =>
      careersService.updateVacancy(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: careerKeys.vacancies });
    },
  });
};

export const useDeleteVacancy = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => careersService.deleteVacancy(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: careerKeys.vacancies });
    },
  });
};

// --- APPLICATIONS ---



export const useApplications = () => {
  return useQuery({
    queryKey: [...careerKeys.applications, "withVacancyName"],
    queryFn: async () => {
      const response = await careersService.getApplications();
      return response.documents;
    },
  });
};

export const useSubmitApplication = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ vacancyId, data }: { vacancyId: string; data: any }) =>
      careersService.submitApplication(vacancyId, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: careerKeys.applications });
    },
  });
};
