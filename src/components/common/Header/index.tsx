import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Popover, Drawer, Button } from 'antd';
import {
  ShoppingFilled,
  HomeFilled,
  EnvironmentFilled,
  HeartFilled,
  CaretDownOutlined,
  MenuOutlined,
} from '@ant-design/icons';

export default function Header() {
  const [open, setOpen] = useState(false);  // Change variable name from visible to open

  const showDrawer = () => {
    setOpen(true);  // Use setOpen instead of setVisible
  };

  const onClose = () => {
    setOpen(false);  // Use setOpen instead of setVisible
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md flex items-center justify-between px-4 py-2 h-[76px] text-sm z-10">
      {/* Profile section */}
      <div className="flex items-center gap-4 cursor-pointer">
        <Image
          className="border-solid border-2 border-[#e84118] p-[1px] rounded-full h-[44px] w-[44px]"
          height={44}
          width={44}
          src="/images/front_face.png"
          alt="avatar"
        />
        <div className="grid grid-rows-2 gap-1">
          <span className="font-bold">Quang Vu Huy</span>
          <div className="flex items-center gap-1">
            <Popover
              placement="bottomLeft"
              title="Thông tin cá nhân"
              content={
                <div className="flex flex-col gap-3">
                  <div className="flex gap-1">
                    <ShoppingFilled />
                    <p>
                      Làm việc tại <span className="font-bold">Giaohangtietkiem.vn</span>
                    </p>
                  </div>
                  <div className="flex gap-1">
                    <HomeFilled />
                    <p>
                      Sống tại <span className="font-bold">Hà Nội</span>
                    </p>
                  </div>
                  <div className="flex gap-1">
                    <EnvironmentFilled />
                    <p>
                      Đến từ <span className="font-bold">Thái Bình</span>
                    </p>
                  </div>
                  <div className="flex gap-1">
                    <HeartFilled />
                    <p>Đang hẹn hò</p>
                  </div>
                </div>
              }
            >
              <span className="text-slate-700 font-normal">Lập trình viên</span>
            </Popover>
            <span className="flex items-center ml-[3px]">
              <CaretDownOutlined style={{ fontSize: '10px' }} />
            </span>
            <Link href={"https://fb.com/homie210/"} target="_blank" rel="noopener noreferrer">
              <span className="ml-1 text-slate-500">Theo dõi</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation section */}
      <nav className="flex justify-end items-center cursor-pointer flex-grow text-xs">
        <div className="font-semibold tracking-[2px]">
          <div className="hidden lg:flex">
            <ul className="flex gap-[3rem]">
              <li className="hover:text-[#fdcb6e] transition delay-[45ms]">
                <Link href="/">TRANG CHỦ</Link>
              </li>
              <li className="hover:text-[#fdcb6e] transition delay-[45ms]">
                <Link href="/bai-viet">BÀI VIẾT</Link>
              </li>
              <li className="hover:text-[#fdcb6e] transition delay-[45ms]">
                <Link href="/khoa-hoc">KHOÁ HỌC</Link>
              </li>
              <li className="hover:text-[#fdcb6e] transition delay-[45ms]">
                <Link href="/lien-he">LIÊN HỆ</Link>
              </li>
            </ul>
          </div>
          <div className="lg:hidden flex items-center">
            <Button type="text" onClick={showDrawer} icon={<MenuOutlined />} />
          </div>
        </div>
      </nav>

      {/* Drawer for mobile */}
      <Drawer title="Menu" placement="right" onClose={onClose} open={open}>
        <ul className="flex flex-col">
          <li className="py-2">
            <Link href="/" onClick={onClose}>TRANG CHỦ</Link>
          </li>
          <li className="py-2">
            <Link href="/bai-viet" onClick={onClose}>BÀI VIẾT</Link>
          </li>
          <li className="py-2">
            <Link href="/khoa-hoc" onClick={onClose}>KHOÁ HỌC</Link>
          </li>
          <li className="py-2">
            <Link href="/lien-he" onClick={onClose}>LIÊN HỆ</Link>
          </li>
        </ul>
      </Drawer>
    </header>
  );
}
