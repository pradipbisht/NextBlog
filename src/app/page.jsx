import Link from "next/link";
import CallToAction from "./components/CallToAction";
import RecentPosts from "./components/RecentPosts";

export default async function Home() {
  let posts = null;
  try {
    const result = await fetch(process.env.URL + "/api/post/get", {
      method: "POST",
      body: JSON.stringify({ limit: 9, order: "desc" }),
      cache: "no-store",
    });
    const data = await result.json();
    posts = data.posts;
  } catch (error) {
    console.log("Error getting post:", error);
  }
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col gap-8 p-16 px-5 max-w-7xl mx-auto ">
        <h1 className="text-4xl font-extrabold dark:text-gray-100 text-center lg:text-7xl text-gray-900 mb-6">
          Welcome to My Dev Blog
        </h1>
        <p className="text-gray-700 dark:text-gray-100 text-md sm:text-lg text-center max-w-3xl mx-auto">
          Explore a curated collection of articles and tutorials on web
          development, software engineering, and the latest in programming
          languages. All brought to life with Next.js and{" "}
          <a
            href="https://go.clerk.com/fgJHKlt"
            className="text-teal-600 hover:text-teal-700 font-semibold"
            target="_blank">
            Clerk
          </a>
          .
        </p>
      </div>

      <div className="p-3 flex flex-col gap-8 py-7">
        <RecentPosts limit={9} />
        <Link
          href={"/search?category=null"}
          className="text-lg text-teal-500 hover:underline text-center">
          View all posts
        </Link>
      </div>
      <div className="p-3 w-full items-center">
        <CallToAction />
      </div>
    </div>
  );
}
