import { prisma } from "./utils/db";
async function getData() {
  const data = await prisma.blogPost.findMany({
    select: {
      title: true,
      content: true,
      imageUrl: true,
      authorImage: true,
      id: true,
    },
  });
  return data;
}

export default async function Page() {
  const data = getData(); // ⬅️ 这里才执行初始化！
  const posts = await prisma.blogPost.findMany();

  return (
    <div>
      <h1>Posts</h1>
      <pre>{JSON.stringify(posts, null, 2)}</pre>
    </div>
  );
}
