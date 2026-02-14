import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import { Company, categoryColors } from "@/data/companies";
import HiringSparkline from "./HiringSparkline";

interface CompanyCardProps {
  company: Company;
}

const CompanyCard = ({ company }: CompanyCardProps) => {
  return (
    <Link
      to={`/company/${company.id}`}
      className="group block rounded-2xl bg-card p-6 shadow-card transition-all duration-200 hover:shadow-elevated hover:-translate-y-0.5"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-4 min-w-0">
          <div className="h-12 w-12 flex-shrink-0 rounded-xl bg-muted flex items-center justify-center overflow-hidden p-1.5">
            <img
              src={company.logo}
              alt={company.name}
              className="h-full w-full object-contain"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
                (e.target as HTMLImageElement).parentElement!.innerHTML = `<span class="text-lg font-bold text-muted-foreground">${company.name[0]}</span>`;
              }}
            />
          </div>
          <div className="min-w-0">
            <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors truncate">
              {company.name}
            </h3>
            <p className="text-sm text-muted-foreground truncate">{company.descriptor}</p>
          </div>
        </div>
        <span className={`flex-shrink-0 rounded-full px-3 py-1 text-xs font-medium ${categoryColors[company.category]}`}>
          {company.category}
        </span>
      </div>

      <div className="mt-5 flex items-end justify-between">
        <div className="space-y-2">
          <p className="text-xl font-semibold text-compensation font-display">
            {company.compensationRange}
          </p>
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <MapPin className="h-3.5 w-3.5" />
            <span>{company.location}</span>
          </div>
        </div>
        <HiringSparkline data={company.hiringTrend} />
      </div>
    </Link>
  );
};

export default CompanyCard;
