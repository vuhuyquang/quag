"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/common/Header";
import { useEffect, useState } from "react";

export default function HeaderClient() {
  const pathname = usePathname();
  const [isNotFound, setIsNotFound] = useState(false);

  useEffect(() => {
    // Kiểm tra nếu pathname trùng với đường dẫn 404 hoặc có bất kỳ logic nào khác
    // để xác định trang 404
    setIsNotFound(document.title.includes("404"));
  }, [pathname]);

  return !isNotFound ? <Header /> : null;
}
