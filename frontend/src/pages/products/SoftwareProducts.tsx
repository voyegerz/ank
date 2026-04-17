import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  CheckCircle2,
  ArrowRight,
  Laptop,
  Globe,
  Share2,
  Database,
  ShieldCheck,
  Loader2,
} from "lucide-react";
import PageLayout from "../../components/PageLayout";
import CommonHero from "../../components/CommonHero";
import Marquee from "../../components/products/Marquee";
import CTASection from "@/components/service/CTA";
import {
  useProductsByCategoryName,
  useSubCategoriesByCategoryName,
} from "@/hooks/useCatalogQueries";
import type { Product } from "@/types/product";
import { transformProducts } from "@/utils/productTransform";

// ─── Online Demo Images (Unsplash) ───────────────────────────────────────────
const IMG = {
  hero: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1920",
  websiteDev:
    "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=900",
  appDev:
    "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=900",
  seo: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=900",
  inventory:
    "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=900",
  erp: "https://images.unsplash.com/photo-1504868584819-f8eec24217af?auto=format&fit=crop&q=80&w=900",
};

const CATEGORY_NAME = "software";

// Icon mapping for categories
const getCategoryIcon = (category: string) => {
  switch (category.toLowerCase()) {
    case "development":
      return <Globe size={16} />;
    case "marketing":
      return <Share2 size={16} />;
    case "management":
      return <Database size={16} />;
    default:
      return <Laptop size={16} />;
  }
};

const SoftwareProducts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  // Fetch products by category name using two-step resolver
  const {
    data: productsData,
    isLoading: isLoadingProducts,
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

  // Transform fetched products using shared utility
  const products: Product[] = useMemo(
    () =>
      transformProducts(productsData, {
        defaultImage: IMG.websiteDev,
        getIcon: getCategoryIcon,
      }),
    [productsData],
  );

  // Updated filter logic - match against subCategory name
  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase());
    // Match activeCategory (Name) against product.subCategory (contains name from Query.select)
    const matchesSubCategory =
      activeCategory === "All" || product.subCategory === activeCategory;
    return matchesSearch && matchesSubCategory;
  });

  const allImages =
    products.length > 0
      ? products.map((p) => p.image)
      : [IMG.websiteDev, IMG.appDev, IMG.seo, IMG.inventory];

  return (
    <PageLayout>
      <CommonHero
        bgImage={IMG.hero}
        title="Software Products"
        caption="ANK Digital Solutions"
        subtitle="Professional websites, custom applications, and digital marketing strategies tailored for industrial and business excellence."
        watermarkNumber="02"
      />

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
                placeholder="Search software products..."
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
          {isLoadingProducts && (
            <div className="py-32 text-center">
              <Loader2 className="w-12 h-12 text-primary animate-spin mx-auto mb-4" />
              <p className="text-slate-500 font-medium">Loading products...</p>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="py-32 text-center">
              <h3 className="text-2xl font-black text-red-500 uppercase italic mb-4">
                Failed to load products
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

          {/* Detailed Product List */}
          {!isLoadingProducts && !error && (
            <div className="space-y-32">
              <AnimatePresence mode="popLayout">
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
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
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                        <div className="absolute top-6 right-6 z-10">
                          <span className="bg-white/90 backdrop-blur px-4 py-2 text-xs font-black tracking-tighter text-primary shadow-xl">
                            {product.price}
                          </span>
                        </div>
                        <div className="absolute bottom-6 left-6 z-10">
                          <span className="inline-flex items-center gap-1.5 bg-primary/90 backdrop-blur text-white px-4 py-2 text-[10px] font-black uppercase tracking-widest shadow-xl">
                            {product.icon}
                            {product.category}
                          </span>
                        </div>
                      </div>

                      {/* Content Side */}
                      <div className="w-full space-y-8">
                        <div className="space-y-4">
                          <div className="flex items-center gap-3">
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">
                              {product.subCategory}
                            </span>
                            <div className="h-px w-12 bg-primary/20" />
                          </div>
                          <h2 className="text-3xl lg:text-4xl font-black text-slate-900 uppercase leading-[0.9] tracking-tighter">
                            {product.name}
                          </h2>
                          <p className="text-slate-500 text-sm leading-relaxed max-w-lg">
                            {product.description}
                          </p>
                        </div>

                        <div className="space-y-4">
                          <h4 className="text-[10px] font-black uppercase text-slate-400 tracking-widest">
                            Key Capabilities
                          </h4>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                            {product.features.map((feature, i) => (
                              <li
                                key={i}
                                className="flex items-center gap-2 text-xs font-bold text-slate-700"
                              >
                                <CheckCircle2
                                  size={14}
                                  className="text-primary"
                                />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="pt-4">
                          <button className="inline-flex items-center gap-4 bg-primary text-white hover:bg-slate-900 px-8 py-4 text-[10px] font-black uppercase tracking-[0.2em] transition-all group/btn">
                            Request Consultation
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

              {filteredProducts.length === 0 && !isLoadingProducts && (
                <div className="py-32 text-center">
                  <h3 className="text-2xl font-black text-slate-200 uppercase italic">
                    {products.length === 0
                      ? "No products available in this category yet..."
                      : "No matches found for your search..."}
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

      {/* Compliance Strip */}
      <section className="bg-slate-900 py-16 px-6 md:px-16 lg:px-32">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="flex items-center gap-4 flex-shrink-0">
              <ShieldCheck size={32} className="text-emerald-400" />
              <div>
                <h3 className="text-white font-black text-lg uppercase tracking-tight">
                  Secure Development
                </h3>
                <p className="text-slate-400 text-xs font-medium">
                  We follow industry-standard security protocols
                </p>
              </div>
            </div>
            <div className="h-px flex-1 bg-slate-700 hidden md:block" />
            <div className="flex flex-wrap items-center justify-center gap-6">
              {[
                "Modern Stack",
                "Scalable Data",
                "Cloud Ready",
                "Enterprise Security",
              ].map((cert) => (
                <span
                  key={cert}
                  className="px-5 py-2.5 border border-slate-700 text-[10px] font-black uppercase tracking-widest text-slate-300 hover:border-emerald-400 hover:text-emerald-400 transition-colors"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Gallery */}
      <section className="bg-slate-50 py-24">
        <div className="px-6 md:px-16 lg:px-32 mb-12">
          <div className="flex items-end justify-between">
            <div className="max-w-xl">
              <h2 className="text-3xl font-black uppercase tracking-tighter text-slate-900 mb-4">
                Digital <span className="text-primary italic">Portfolio</span>
              </h2>
              <p className="text-slate-500 text-xs font-medium leading-relaxed uppercase">
                Explore our software development projects. Every product is
                built for scalability and user experience.
              </p>
            </div>
          </div>
        </div>
        <Marquee images={allImages} speed={40} />
      </section>

      <CTASection
        eyebrow="Transform Your Business"
        eyebrowHighlight="Transform"
        heading="Ready to optimize your internal workflows with custom software solutions?"
        primaryLabel="Start Your Project"
        secondaryLabel="Technical Inquiry"
      />
    </PageLayout>
  );
};

export default SoftwareProducts;
