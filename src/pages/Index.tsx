import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { companies, categories, type PlacementCategory } from "@/data/companies";
import CompanyCard from "@/components/placement/CompanyCard";

const Index = () => {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState<PlacementCategory | "All">("All");

  const filtered = useMemo(() => {
    return companies.filter((c) => {
      const matchesSearch =
        !search ||
        c.name.toLowerCase().includes(search.toLowerCase()) ||
        c.descriptor.toLowerCase().includes(search.toLowerCase()) ||
        c.industry.toLowerCase().includes(search.toLowerCase());
      const matchesFilter = activeFilter === "All" || c.category === activeFilter;
      return matchesSearch && matchesFilter;
    });
  }, [search, activeFilter]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-30">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/srmlogo.png" alt="SRM Logo" className="h-10 w-auto object-contain" />
            <div className="flex flex-col leading-tight hidden sm:flex">
              <span className="font-semibold text-foreground text-sm">
                Placement Portal
              </span>
              <span className="text-xs text-muted-foreground">
                Directorate of Career Centre
              </span>
            </div>
          </div>
          <nav className="flex items-center gap-6 text-sm text-muted-foreground">
            <span className="text-foreground font-medium">Companies</span>
            <span className="hidden sm:block cursor-default">Statistics</span>
            <span className="hidden sm:block cursor-default">Calendar</span>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6">
        {/* Hero Section */}
        <section className="pt-16 pb-12">
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight text-balance">
            SRM DCC Placement Portal
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl">
            Official recruitment insights and company information by Directorate of Career Centre (DCC).
          </p>

          {/* Search */}
          <div className="mt-10 relative max-w-2xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search companies, roles, or industries..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-2xl border border-border bg-card py-3.5 pl-12 pr-4 text-base text-foreground placeholder:text-muted-foreground shadow-soft focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all"
            />
          </div>

          {/* Filter Chips */}
          <div className="mt-6 flex flex-wrap gap-2">
            <button
              onClick={() => setActiveFilter("All")}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${activeFilter === "All"
                ? "bg-foreground text-background shadow-soft"
                : "bg-secondary text-secondary-foreground hover:bg-accent"
                }`}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${activeFilter === cat
                  ? "bg-foreground text-background shadow-soft"
                  : "bg-secondary text-secondary-foreground hover:bg-accent"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Company Grid */}
        <section className="pb-20">
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm text-muted-foreground">
              {filtered.length} {filtered.length === 1 ? "company" : "companies"}
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((company, i) => (
              <div key={company.id} className="animate-fade-in" style={{ animationDelay: `${i * 60}ms` }}>
                <CompanyCard company={company} />
              </div>
            ))}
          </div>
          {filtered.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-lg text-muted-foreground">No companies match your search.</p>
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default Index;
