import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { FC } from "react";
interface SearchFiltersProps {
  data: unknown;
}

const SearchFilters: FC<SearchFiltersProps> = ({ data }) => {
  return (
    <div className="flex flex-col lg:px-12 py-8 border-b w-full gap-4 px-4">
      <div className="relative hidden md:flex items-center">
        <Input
          type="search"
          placeholder="Search products..."
          className="w-[200px] lg:w-[300px] pr-8"
        />
        <Search className="absolute right-2 h-4 w-4 text-muted-foreground" />
      </div>
      {data ? (
        <div>{JSON.stringify(data, null, 2)}</div> 
      ) : (
        <span className="absolute px-2 bg-red-100">No data </span>
      )}
    </div>
  );
};

export default SearchFilters;
