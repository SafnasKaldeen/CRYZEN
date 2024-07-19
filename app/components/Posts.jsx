import React from "react";
import usePosts from "../Hooks/usePosts";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import Image from "next/image";
import GamesList from "./GameList";

const Posts = ({ id }) => {
  const { posts, loading, error } = usePosts(id);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <React.Fragment>
      {posts.length === 0 && <div>No posts found</div>}
      {posts.length > 0 && (
        <h2 className="text-2xl font-bold mb-4 hover:opacity-50">
          Reddit Posts
        </h2>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mr-8">
        {posts.results.map((post) => (
          <Card
            key={post.id}
            className="transition-transform transform hover:scale-105 hover:shadow-2xl cursor-pointer bg-zinc-900 rounded-xl overflow-hidden group"
            onClick={() =>
              window.open(post.url, "_blank", "noopener noreferrer")
            }
          >
            <CardBody className="overflow-visible p-0 relative">
              <div className="relative w-full h-48">
                <div className="absolute inset-0 bg-glass transition-opacity duration-300 group-hover:opacity-0"></div>
                <Image
                  alt={post.title}
                  className="m-3 object-cover absolute inset-0 w-full h-full transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                  src="/giphy.webp"
                  layout="fill"
                />
              </div>
            </CardBody>
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start mb-2">
              <p className="text-tiny uppercase font-bold text-slate-400">
                {post.username}
              </p>
              <div className="divider w-full m-0"></div>
              <h4 className="font-bold text-large">{post.name}</h4>
            </CardHeader>
          </Card>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Posts;
