import Image from 'next/image';
import React from 'react';
import "@/app/styles.scss";

export default function Home() {
  return (
    <>
      <div id="banner" className="w-full m-0 p-0 flex flex-col">
        <h1 className="text-center text-white project-name">Quag</h1>
        <div className="flex h-full w-full opacity-95">
          <div className="relative w-full md:w-1/2 h-full"> {/* Div chứa hình ảnh */}
            <Image
              className="object-cover"
              src="https://images.pexels.com/photos/210017/pexels-photo-210017.jpeg?auto=compress&cs=tinysrgb&w=650&h=700&dpr=10"
              alt="Ảnh"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="hidden md:block w-1/2 bg-black"></div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="flex justify-end flex-col md:flex-row h-full">
          <div className="w-full md:w-8/12 flex flex-col items-center justify-center">
            <h2 className="title-intro text-4xl md:text-6xl font-bold mb-5">
              <span className="bg-[#fdcb6e]">Lập trình viên</span> website,
              blogger, và là Founder của <span className="bg-[#fdcb6e]">Quag</span>
            </h2>
            <p className="content-intro text-base md:text-lg">
              Chào mọi người, mình là Vũ Huy Quang, một lập trình viên với kinh
              nghiệm đa lĩnh vực. Mình là Frontend & Backend Developer và Automation Tester,
              thành thạo Laravel, Vue.js, Spring Boot, React.js và cả Robot Framework. Sự đa dạng
              trong công nghệ giúp mình làm việc linh hoạt và hiệu quả trong công việc.
            </p>
            <p className="content-intro text-base md:text-lg">
              Mình chuyên phát triển các ứng dụng web đa dạng từ đơn giản đến
              phức tạp, xây dựng các công cụ tự động hóa để tối ưu quy trình
              làm việc, cũng như thành thạo việc xây dựng proxy server nhanh
              chóng. Ngoài ra, mình đam mê chia sẻ kiến thức và kinh nghiệm
              qua việc viết blog, tạo kết nối và giao lưu với độc giả.
            </p>
          </div>
        </div>
      </div>
      <div className="h-screen flex items-center justify-center">
        <div className="h-3/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 container-service text-[16px]">
          <div className="service-item px-5 py-20 bg-white text-dark flex flex-col gap-5">
            <div>
              <Image height={80} width={80} src="/icons/svg/web-development.svg" alt="Phát triển Web" />
            </div>
            <div className="flex flex-col gap-5">
              <h3 className="heading mb-3 service-name">Phát triển Web</h3>
              <p>Xây dựng và phát triển các ứng dụng web.</p>
            </div>
          </div>
          <div className="service-item px-5 py-20 bg-[#1e1e1e] text-white flex flex-col gap-5">
            <div>
              <Image height={80} width={80} src="/icons/svg/web-design.svg" alt="Viết Tool" />
            </div>
            <div className="flex flex-col gap-5">
              <h3 className="heading mb-3 service-name">Viết Tool</h3>
              <p>Tạo ra các công cụ tự động, tối ưu hóa quy trình làm việc.</p>
            </div>
          </div>
          <div className="service-item px-5 py-20 bg-white text-dark flex flex-col gap-5">
            <div>
              <Image height={80} width={80} src="/icons/svg/server-proxy-svgrepo-com.svg" alt="Proxy Server" />
            </div>
            <div className="flex flex-col gap-5">
              <h3 className="heading mb-3 service-name">Proxy Server</h3>
              <p>Giúp bạn tạo ra các proxy server nhanh chóng và dễ dàng.</p>
            </div>
          </div>
          <div className="service-item px-5 py-20 bg-[#fdcb6e] text-dark flex flex-col gap-5">
            <div>
              <Image height={80} width={80} src="/icons/svg/writing.svg" alt="Viết Blog" />
            </div>
            <div className="flex flex-col gap-5">
              <h3 className="heading mb-3 service-name">Viết Blog</h3>
              <p>Chia sẻ kiến thức, tạo kết nối với độc giả và tác giả thông qua các bài viết.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
