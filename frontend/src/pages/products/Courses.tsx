import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  CheckCircle2,
  ArrowRight,
  BookOpen,
  GraduationCap,
  Clock,
  Layers,
  Award,
  Loader2,
} from "lucide-react";
import PageLayout from "../../components/PageLayout";
import CommonHero from "../../components/CommonHero";
import Marquee from "../../components/products/Marquee";
import CTASection from "@/components/service/CTA";
import { useNavigate } from "react-router-dom";
import {
  useProductsByCategoryName,
  useSubCategoriesByCategoryName,
} from "@/hooks/useCatalogQueries";
import type { Course } from "@/types/product";
import { transformCourses } from "@/utils/productTransform";

// ─── Online Demo Images (Unsplash) ───────────────────────────────────────────
const IMG = {
  hero: "https://images.unsplash.com/photo-1524178232363-1fb28f74b573?auto=format&fit=crop&q=80&w=1920",
  cad: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=900",
  printing:
    "https://images.unsplash.com/photo-1563127393-294c63266e76?auto=format&fit=crop&q=80&w=900",
  plc: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=900",
  web: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=900",
  robotics:
    "https://images.unsplash.com/photo-1561144443-f546830b6d9b?auto=format&fit=crop&q=80&w=900",
};

const CATEGORY_NAME = "courses";

// ─── Feature Bar Data ────────────────────────────────────────────────────────
const features = [
  { icon: <Award size={24} />, label: "Certification" },
  { icon: <BookOpen size={24} />, label: "Live Projects" },
  { icon: <Clock size={24} />, label: "Lifetime Access" },
  { icon: <GraduationCap size={24} />, label: "Expert Mentors" },
];

// Icon mapping for categories
const getCategoryIcon = (category: string) => {
  switch (category.toLowerCase()) {
    case "design":
      return <Layers size={16} />;
    case "manufacturing":
      return <Layers size={16} />;
    case "automation":
      return <BookOpen size={16} />;
    case "digital":
      return <BookOpen size={16} />;
    case "electronics":
      return <GraduationCap size={16} />;
    default:
      return <BookOpen size={16} />;
  }
};

// Helper to determine level based on product specs or default to Intermediate
const getLevel = (product: any): "Beginner" | "Intermediate" | "Advanced" => {
  const specs = product.key_specs || [];
  if (specs.some((s: string) => s.toLowerCase().includes("beginner")))
    return "Beginner";
  if (specs.some((s: string) => s.toLowerCase().includes("advanced")))
    return "Advanced";
  return "Intermediate";
};

const Courses = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  // Fetch courses by category name using two-step resolver
  const {
    data: coursesData,
    isLoading: isLoadingCourses,
    error,
  } = useProductsByCategoryName(CATEGORY_NAME);

  // Fetch sub-categories for the current category
  const { data: subCategoriesData } =
    useSubCategoriesByCategoryName(CATEGORY_NAME);

  // Prepare filter buttons dynamically from sub-categories
  const subCategoryFilters = useMemo(() => {
    if (!subCategoriesData) return ["All"];
    return ["All", ...subCategoriesData.map((sub: any) => sub.name)];
  }, [subCategoriesData]);

  // Transform fetched courses using shared utility
  const courses: Course[] = useMemo(
    () =>
      transformCourses(coursesData, {
        defaultImage: IMG.hero,
        getIcon: getCategoryIcon,
        getLevel: getLevel,
      }),
    [coursesData],
  );

  // Updated filter logic - match against subCategory name
  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.category.toLowerCase().includes(searchTerm.toLowerCase());
    // Match activeCategory (Name) against course.subCategory (contains name from Query.select)
    const matchesSubCategory =
      activeCategory === "All" || course.subCategory === activeCategory;
    return matchesSearch && matchesSubCategory;
  });

  const allImages =
    courses.length > 0 ? courses.map((c) => c.image) : Object.values(IMG);

  return (
    <PageLayout>
      <CommonHero
        bgImage={IMG.hero}
        title="Training Programs"
        caption="ANK Academy"
        subtitle="Empowering the next generation of engineers with industry-relevant skills. Our professional courses are designed by experts for real-world application."
        watermarkNumber="25"
      />

      {/* Feature Bar */}
      <section className="bg-slate-900">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4">
          {features.map((feature, i) => (
            <motion.div
              key={feature.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center justify-center py-10 border-r border-white/5 last:border-r-0"
            >
              <div className="text-white mb-3">{feature.icon}</div>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">
                {feature.label}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-white px-6 md:px-16 lg:px-32">
        <div className="max-w-7xl mx-auto">
          {/* Search and Filters */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-24">
            <div className="relative w-full lg:w-96">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search courses..."
                className="w-full bg-slate-50 border-none px-12 py-4 rounded-sm text-sm font-bold text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-primary outline-none transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {subCategoryFilters.map((catName) => (
                <button
                  key={catName}
                  onClick={() => setActiveCategory(catName)}
                  className={`px-6 py-3 text-[10px] font-black uppercase tracking-widest transition-all ${
                    activeCategory === catName
                      ? "bg-primary text-white shadow-lg shadow-primary/20"
                      : "bg-slate-50 text-slate-500 hover:bg-slate-100"
                  }`}
                >
                  {catName}
                </button>
              ))}
            </div>
          </div>

          {/* Loading State */}
          {isLoadingCourses && (
            <div className="py-32 text-center">
              <Loader2 className="w-12 h-12 text-primary animate-spin mx-auto mb-4" />
              <p className="text-slate-500 font-medium">Loading courses...</p>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="py-32 text-center">
              <h3 className="text-2xl font-black text-red-500 uppercase italic mb-4">
                Failed to load courses
              </h3>
              <p className="text-slate-500 mb-4">{(error as Error).message}</p>
              <button
                onClick={() => window.location.reload()}
                className="text-primary font-bold text-sm underline"
              >
                Try again
              </button>
            </div>
          )}

          {/* Detailed Course List */}
          {!isLoadingCourses && !error && (
            <div className="space-y-32">
              <AnimatePresence mode="popLayout">
                {filteredCourses.map((course, index) => (
                  <motion.div
                    key={course.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="group"
                  >
                    <div
                      className={`flex flex-col md:flex-row gap-12 lg:gap-20 items-center justify-center ${
                        index % 2 !== 0 ? "md:flex-row-reverse" : ""
                      }`}
                    >
                      {/* Image Side */}
                      <div className="w-full md:w-150 aspect-[16/9] overflow-hidden rounded-sm relative shadow-2xl bg-slate-100">
                        <motion.img
                          src={course.image}
                          alt={course.name}
                          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                        <div className="absolute top-6 right-6 z-10 flex flex-col gap-2 items-end">
                          <span className="bg-white/90 backdrop-blur px-4 py-2 text-xs font-black tracking-tighter text-primary shadow-xl">
                            {course.duration}
                          </span>
                          <span
                            className={`px-3 py-1 text-[9px] font-black uppercase tracking-widest text-white shadow-lg ${
                              course.level === "Beginner"
                                ? "bg-green-500"
                                : course.level === "Intermediate"
                                  ? "bg-orange-500"
                                  : "bg-red-500"
                            }`}
                          >
                            {course.level}
                          </span>
                        </div>
                        <div className="absolute bottom-6 left-6 z-10">
                          <span className="inline-flex items-center gap-1.5 bg-primary/90 backdrop-blur text-white px-4 py-2 text-[10px] font-black uppercase tracking-widest shadow-xl">
                            {course.icon}
                            {course.category}
                          </span>
                        </div>
                      </div>

                      {/* Content Side */}
                      <div className="w-full space-y-8">
                        <div className="space-y-4">
                          <div className="flex items-center gap-3">
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">
                              {course.subCategory}
                            </span>
                            <div className="h-px w-12 bg-primary/20" />
                          </div>
                          <h2 className="text-3xl lg:text-4xl font-black text-slate-900 uppercase leading-[0.9] tracking-tighter">
                            {course.name}
                          </h2>
                          <p className="text-slate-500 text-sm leading-relaxed max-w-lg">
                            {course.description}
                          </p>
                        </div>

                        <div className="space-y-4">
                          <h4 className="text-[10px] font-black uppercase text-slate-400 tracking-widest">
                            Curriculum Highlights
                          </h4>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                            {course.curriculum.map((item, i) => (
                              <li
                                key={i}
                                className="flex items-center gap-2 text-xs font-bold text-slate-700"
                              >
                                <CheckCircle2
                                  size={14}
                                  className="text-primary"
                                />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="pt-4">
                          <button
                            onClick={() => navigate("/contact")}
                            className="inline-flex items-center gap-4 bg-primary text-white hover:bg-slate-900 px-8 py-4 text-[10px] font-black uppercase tracking-[0.2em] transition-all group/btn"
                          >
                            Enroll Now
                            <ArrowRight
                              size={14}
                              className="transition-transform group-hover/btn:translate-x-1"
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {filteredCourses.length === 0 && !isLoadingCourses && (
                <div className="py-32 text-center">
                  <h3 className="text-2xl font-black text-slate-200 uppercase italic">
                    {courses.length === 0
                      ? "No courses available in this category yet..."
                      : "No courses found..."}
                  </h3>
                  <button
                    onClick={() => {
                      setSearchTerm("");
                      setActiveCategory("All");
                    }}
                    className="mt-6 text-primary font-bold text-sm underline"
                  >
                    Clear all filters
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Marquee Gallery */}
      <section className="bg-slate-50 py-24">
        <div className="px-6 md:px-16 lg:px-32 mb-12">
          <div className="flex items-end justify-between">
            <div className="max-w-xl">
              <h2 className="text-3xl font-black uppercase tracking-tighter text-slate-900 mb-4">
                Learning{" "}
                <span className="text-primary italic">Environment</span>
              </h2>
              <p className="text-slate-500 text-xs font-medium leading-relaxed uppercase">
                A glimpse into our training centers and hands-on laboratory
                sessions. We focus on practical skills that translate to
                industry excellence.
              </p>
            </div>
          </div>
        </div>
        <Marquee images={allImages} speed={40} />
      </section>

      <CTASection
        eyebrow="Start your engineering journey"
        eyebrowHighlight="journey"
        heading="Ready to master the technologies of tomorrow and build a future-proof career?"
        primaryLabel="Inquire for Batch"
        secondaryLabel="Contact Us"
        onPrimaryClick={() => navigate("/contact")}
        onSecondaryClick={() => navigate("/contact")}
      />
    </PageLayout>
  );
};

export default Courses;
