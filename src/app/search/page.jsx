"use client";

import { Button, Select, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import PostCard from "../components/PostCard";

export default function Search() {
  const [sidebarData, setSidebarData] = useState({
    searchTerm: "",
    sort: "desc",
    category: "uncategorized",
  });
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const searchTermFromUrl = searchParams.get("searchTerm") || "";
    const sortFromUrl = searchParams.get("sort") || "desc";
    const categoryFromUrl = searchParams.get("category") || "uncategorized";

    setSidebarData({
      searchTerm: searchTermFromUrl,
      sort: sortFromUrl,
      category: categoryFromUrl,
    });

    const fetchPosts = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/post/get", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            limit: 9,
            order: sortFromUrl,
            category: categoryFromUrl,
            searchTerm: searchTermFromUrl,
          }),
        });

        if (!res.ok) throw new Error("Failed to fetch posts");

        const data = await res.json();
        setPosts(data.posts);
        setShowMore(data.posts.length === 9);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [searchParams.toString()]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setSidebarData((prev) => ({ ...prev, [id]: value || "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const queryParams = new URLSearchParams(sidebarData).toString();
    router.push(`/search?${queryParams}`);
  };

  const handleShowMore = async () => {
    const startIndex = posts.length;
    try {
      const res = await fetch("/api/post/get", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          limit: 9,
          order: sidebarData.sort,
          category: sidebarData.category,
          searchTerm: sidebarData.searchTerm,
          startIndex,
        }),
      });

      if (!res.ok) throw new Error("Failed to fetch additional posts");

      const data = await res.json();
      setPosts((prev) => [...prev, ...data.posts]);
      setShowMore(data.posts.length === 9);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="p-7 border-b md:border-r md:min-h-screen border-gray-500">
        <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
          {/* Search Term */}
          <div className="flex items-center gap-2">
            <label
              htmlFor="searchTerm"
              className="whitespace-nowrap font-semibold">
              Search Term:
            </label>
            <TextInput
              placeholder="Search..."
              id="searchTerm"
              type="text"
              value={sidebarData.searchTerm || ""}
              onChange={handleChange}
            />
          </div>

          {/* Sort */}
          <div className="flex items-center gap-2">
            <label htmlFor="sort" className="font-semibold">
              Sort:
            </label>
            <Select id="sort" value={sidebarData.sort} onChange={handleChange}>
              <option value="desc">Latest</option>
              <option value="asc">Oldest</option>
            </Select>
          </div>

          {/* Category */}
          <div className="flex items-center gap-2">
            <label htmlFor="category" className="font-semibold">
              Category:
            </label>
            <Select
              id="category"
              value={sidebarData.category}
              onChange={handleChange}>
              <option value="uncategorized">Uncategorized</option>
              <option value="frontend">Frontend Dev</option>
              <option value="backend">Backend Dev</option>
              <option value="devops">DevOps</option>
            </Select>
          </div>

          {/* Apply Filters */}
          <Button type="submit" outline gradientDuoTone="redToYellow">
            Apply Filters
          </Button>
        </form>
      </div>

      {/* Main Content */}
      <div className="w-full">
        <h1 className="text-3xl font-semibold sm:border-b border-gray-500 p-3 mt-5">
          Posts Results:
        </h1>
        <div className="p-7 flex flex-wrap gap-4">
          {!loading && posts.length === 0 && (
            <p className="text-xl text-gray-500">No posts found.</p>
          )}
          {loading && <p className="text-xl text-gray-500">Loading...</p>}
          {!loading &&
            posts.map((post) => <PostCard key={post._id} post={post} />)}
          {showMore && (
            <button
              onClick={handleShowMore}
              className="text-teal-500 text-lg hover:underline p-7 w-full">
              Show More
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
