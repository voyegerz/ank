import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import contentService from "../appwrite/services/content";

// Query Keys
export const contentKeys = {
  all: ["content"] as const,
  caseStudies: ["content", "caseStudies"] as const,
  caseStudy: (id: string) => ["content", "caseStudy", id] as const,
};

// --- CASE STUDIES ---

export const useCaseStudies = () => {
  return useQuery({
    queryKey: contentKeys.caseStudies,
    queryFn: async () => {
      const response = await contentService.getCaseStudies();
      return response.documents.map((study: any) => ({
        ...study,
        imageUrl: study.image_id
          ? contentService.getProjectImagePreview(study.image_id)
          : null,
      }));
    },
  });
};

export const useCaseStudy = (id: string | undefined) => {
  return useQuery({
    queryKey: contentKeys.caseStudy(id || ""),
    queryFn: async () => {
      if (!id) return null;
      const study = await contentService.getCaseStudy(id);
      return {
        ...study,
        imageUrl: study.image_id
          ? contentService.getProjectImagePreview(study.image_id)
          : null,
      } as any;
    },
    enabled: !!id,
  });
};

export const useCreateCaseStudy = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: any) => contentService.createCaseStudy(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: contentKeys.caseStudies });
    },
  });
};

export const useUpdateCaseStudy = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: any }) =>
      contentService.updateCaseStudy(id, data),
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries({ queryKey: contentKeys.caseStudies });
      queryClient.invalidateQueries({ queryKey: contentKeys.caseStudy(id) });
    },
  });
};

export const useDeleteCaseStudy = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ id, imageId }: { id: string; imageId?: string }) => {
      // First delete the case study image if it exists
      if (imageId) {
        await contentService.deleteProjectImage(imageId).catch(console.error);
      }
      // Then delete the case study
      return contentService.deleteCaseStudy(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: contentKeys.caseStudies });
    },
  });
};

// --- CASE STUDY ITEMS ---

export const useStudyItems = () => {
  return useQuery({
    queryKey: ["content", "studyItems"],
    queryFn: async () => {
      const response = await contentService.getStudyItems();
      return response.documents;
    },
  });
};

export const useStudyItemsByCaseStudy = (caseStudyId: string | undefined) => {
  return useQuery({
    queryKey: ["content", "studyItems", "byCaseStudy", caseStudyId],
    queryFn: async () => {
      if (!caseStudyId) return [];
      const { Query } = await import("appwrite");
      const response = await contentService.getStudyItems([
        Query.equal("caseStudies", [caseStudyId]),
      ]);
      return response.documents;
    },
    enabled: !!caseStudyId,
  });
};

export const useAddStudyItem = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ studyId, data }: { studyId: string; data: any }) =>
      contentService.addItemToStudy(studyId, data),
    onSuccess: (_, { studyId }) => {
      queryClient.invalidateQueries({
        queryKey: contentKeys.caseStudy(studyId),
      });
      queryClient.invalidateQueries({ queryKey: ["content", "studyItems"] });
      queryClient.invalidateQueries({ queryKey: contentKeys.caseStudies });
    },
  });
};

export const useUpdateStudyItem = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: any }) =>
      contentService.updateStudyItem(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["content", "studyItems"] });
      queryClient.invalidateQueries({ queryKey: contentKeys.all });
    },
  });
};

export const useDeleteStudyItem = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => contentService.deleteStudyItem(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["content", "studyItems"] });
      queryClient.invalidateQueries({ queryKey: contentKeys.all });
    },
  });
};
