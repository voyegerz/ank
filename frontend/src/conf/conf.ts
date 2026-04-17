const conf = {
  // Appwrite Core
  appwriteUrl: import.meta.env.VITE_APPWRITE_ENDPOINT,
  appwriteProjectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,

  // Database
  appwriteDatabaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,

  // Table IDs
  appwriteProductsTableId: import.meta.env.VITE_APPWRITE_PRODUCTS_TABLE,
  appwriteCategoryTableId: import.meta.env.VITE_APPWRITE_CATEGORY_TABLE,
  appwriteSubCategoryTableId: import.meta.env.VITE_APPWRITE_SUB_CATEGORY_TABLE,
  appwriteCaseStudiesTableId: import.meta.env.VITE_APPWRITE_CASE_STUDIES_TABLE,
  appwriteCaseStudyItemsTableId: import.meta.env
    .VITE_APPWRITE_CASE_STUDY_ITEMS_TABLE,
  appwriteVacanciesTableId: import.meta.env.VITE_APPWRITE_VACANCIES_TABLE,
  appwriteJobApplicationsTableId: import.meta.env
    .VITE_APPWRITE_JOB_APPLICATIONS_TABLE,
  appwriteInquiriesTableId: import.meta.env.VITE_APPWRITE_INQUIRIES_TABLE,

  // Bucket IDs
  appwriteBucketID: import.meta.env.VITE_APPWRITE_BUCKET_ID,
};

export default conf;
