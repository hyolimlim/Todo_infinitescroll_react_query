import { useEffect } from "react";
import { useInfiniteQuery } from "react-query";
import { fetchRepositories } from "../api/scroll";

function Infinitescroll() {
  const { data, hasNextPage, fetchNextPage, isLoading } = useInfiniteQuery(
    "repositories",
    ({ pageParam = 1 }) => fetchRepositories(pageParam),
    {
      getNextPageParam: (lastPage, allPages) => {
        // 하단은 전달된 data에 islast값이 없을 때 사용.
        const maxPages = lastPage.length;
        const nextPage = allPages.length + 1;
        return nextPage <= maxPages ? nextPage : undefined;
      },
    }
  );

  useEffect(() => {
    let fetching = false;

    const onscroll = async (e) => {
      const { scrollHeight, scrollTop, clientHeight } =
        e.target.scrollingElement;

      if (!fetching && scrollHeight - scrollTop <= clientHeight * 1.5) {
        fetching = true;
        await fetchNextPage();
        fetching = false;
      }
    };

    document.addEventListener("scroll", onscroll);
    return () => {
      document.removeEventListener("scroll", onscroll);
    };
  }, []);

  if (isLoading)
    return (
      <div>
        <p>Loading...</p>
      </div>
    );

  const { pages } = data;

  return (
    <div>
      {pages.map((items) =>
        items.map((item) => (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <p>{item.body}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Infinitescroll;
