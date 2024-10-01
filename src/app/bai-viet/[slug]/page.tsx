"use client";

import Image from 'next/image';
import { useEffect, useState } from 'react';
import DOMPurify from 'dompurify';
import { posts } from '@/data/mockData';
import { formatDate } from '@/utils/formatDate';

interface Post {
  slug: string;
  title: string;
  shortContent: string;
  imageUrl: string;
  author: string;
  authorAvatar: string;
  category: string;
  createdAt: string;
  readingTime: string;
  fullContent: string;
}

const fetchPostData = async (slug: string): Promise<Post | null> => {
  return posts.find(post => post.slug === slug) || null;
};

export default function PostDetail({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    const getPost = async () => {
      const postData = await fetchPostData(slug);
      console.log(123, postData);
      
      setPost(postData);
    };
    getPost();
  }, [slug]);

  if (!post) {
    return <div>Loading...</div>;
  }

  const sanitizedContent = DOMPurify.sanitize(post.fullContent);

  return (
    <div className="max-w-3xl mx-auto p-5 overflow-hidden">
      <h1 className="mb-5 text-3xl md:text-4xl font-bold tracking-tight text-gray-800 hover:text-gray-900 transition duration-300 cursor-pointer">
        {post.title}
      </h1>
      <p className="mb-5 text-lg md:text-xl text-gray-600">{post.shortContent}</p>
      <img className="w-full mb-5 rounded-lg object-cover" src={post.imageUrl} alt={post.title} />
      <div className="mb-5 flex items-center justify-between flex-wrap">
        <div className="flex items-center gap-2">
          <Image
            height={26}
            width={26}
            className="rounded-full"
            src={post.authorAvatar}
            alt="avatar"
          />
          <span className="text-[#292929] text-[10px] lg:text-sm xl:text-sm">{post.author}</span>
        </div>
        <div className="flex items-center gap-5 text-[#979797] text-[10px] lg:text-sm xl:text-sm flex-wrap">
          <span className="rounded-full bg-[#f2f2f2] px-2 py-1 flex items-center">{post.category}</span>
          <span>{formatDate(post.createdAt)}</span>
          <span>{post.readingTime}</span>
        </div>
      </div>
      <div className="text-gray-700 mb-5 text-lg leading-relaxed text-justify">
        <div dangerouslySetInnerHTML={{ __html: sanitizedContent }} />
      </div>
    </div>
  );
};
