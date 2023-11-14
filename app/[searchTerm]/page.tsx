import ItemCard from "./components/ItemCard";
import { getWikipediaData } from "@/lib/service";

type searchTermProps = {
  params: {
    searchTerm: string;
  };
};

const searchTermpage = async ({ params: { searchTerm } }: searchTermProps) => {
  const data = await getWikipediaData(searchTerm);
  const result = data?.query?.pages;

  return (
    <div className="grid grid-cols-4 gap-4">
      {result ? (
        Object?.values(result)?.map((page) => {
          return (
            <div key={page.pageid}>
              <ItemCard {...page}></ItemCard>
            </div>
          );
        })
      ) : (
        <h2 className="font-bold">Data Not Found.</h2>
      )}
    </div>
  );
};

export default searchTermpage;
