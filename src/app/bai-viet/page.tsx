"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/bai-viet.module.scss";
import { posts } from "@/data/mockData";
import { formatDate } from "@/utils/formatDate";

export default function Blog() {
  return (
    <div className="space-y-16">
      <div className="container mx-auto lg:px-24 md:px-16 sm:px-8 px-4 pt-16 space-y-16">
        {posts.slice(0, 1).map((post, index) => (
          <Link href={`/bai-viet/${post.slug}`} key={index}>
            <div className="flex flex-col lg:flex-row cursor-pointer mb-6 h-[500px]">
              <div className="w-full lg:w-7/12 bg-yellow-100 rounded-l-lg lg:rounded-l-2xl shadow-lg mb-6 lg:mb-0 overflow-hidden h-auto">
                <img
                  className={`h-full w-full rounded-l-lg lg:rounded-l-2xl ${styles["zoom-on-hover"]}`}
                  src={post.imageUrl}
                  alt="image"
                />
              </div>
              <div className="w-full lg:w-5/12 rounded-r-lg lg:rounded-r-2xl px-3 sm:px-3 md:px-4 lg:px-6 xl:px-6 py-[1.5rem] flex flex-col gap-5 lg:gap-10 shadow-lg">
                <h1 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-[#475467] hover:text-[#000000cc] transition delay-[45ms]">
                  {post.title}
                </h1>
                <p className="text-sm lg:text-base xl:text-lg text-[#475467]">
                  {post.shortContent}
                </p>
                <div className="flex justify-between text-xs lg:text-sm">
                  <div className="flex justify-between gap-2 items-center xl:flex">
                    <Image
                      height={26}
                      width={26}
                      className="rounded-full"
                      src={post.authorAvatar}
                      alt="avatar"
                    />
                    <span className="text-[#292929] text-[10px] lg:text-sm xl:text-sm">{post.author}</span>
                  </div>
                  <div className="flex justify-between gap-5 text-[#979797] items-center text-[10px] lg:text-sm xl:text-sm">
                    <span className="rounded-full bg-[#f2f2f2] px-2 py-1 flex justify-between items-center">{post.category}</span>
                    <span>{formatDate(post.createdAt)}</span>
                    <span>{post.readingTime}</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
          {posts.slice(1).map((post, index) => (
            <Link href={`/bai-viet/${post.slug}`} key={index}>
              <div className="flex flex-col cursor-pointer gap-3 p-4 border-2 border-gray-100 rounded-3xl">
                <div className="h-46 overflow-hidden rounded-2xl">
                  <img
                    className={`h-[180px] w-full object-cover ${styles["zoom-on-hover"]} rounded-2xl`}
                    src={post.imageUrl}
                    alt="image" loading="lazy"
                  />
                </div>
                <div className="px-1 flex flex-col gap-3">
                  <div className="text-sm lg:text-base xl:text-lg font-bold text-[#475467] hover:text-[#000000cc] transition delay-[45ms] line-clamp-3">
                    {post.title}
                  </div>
                  <div className="text-[10px] lg:text-[12px] xl:text-[14px] text-[#475467] line-clamp-2">
                    {post.shortContent}
                  </div>
                  <div className="flex justify-start gap-5 text-[#979797] items-center text-[7px] lg:text-[8px] xl:text-[10px]">
                    <span className="rounded-full bg-[#f2f2f2] px-2 py-1 flex justify-between items-center">{post.category}</span>
                    <span>{formatDate(post.createdAt)}</span>
                    <span>{post.readingTime}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="full-width-container h-[410px] bg-[#e1e5ea] px-[50px] lg:px-[280px] md:px-[180px] sm:px-[80px] xs:px-[30px] py-[80px] mt-10 relative">
        <img className="w-full h-full" src="https://wallpaperaccess.com/full/14736.jpg" alt="image" loading="lazy" />
        <div className="absolute bottom-4 right-4 bg-white p-1 rounded shadow-md text-xs">
          <span>Liên hệ quảng cáo: </span>
          <a href="mailto:quangvh.technical@gmail.com" className="text-blue-600">quangvh.technical@gmail.com</a>
        </div>
      </div>
    </div>
  );
}
