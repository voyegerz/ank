import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import inquiryService from "../appwrite/services/inquiry";

export const inquiryKeys = {
  all: ["inquiries"] as const,
};

export const useInquiries = () => {
  return useQuery({
    queryKey: inquiryKeys.all,
    queryFn: async () => {
      const response = await inquiryService.getInquiries();
      return response.documents;
    },
  });
};

export const useSubmitInquiry = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: any) => inquiryService.submitInquiry(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: inquiryKeys.all });
    },
  });
};

export const useDeleteInquiry = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => inquiryService.deleteInquiry(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: inquiryKeys.all });
    },
  });
};
