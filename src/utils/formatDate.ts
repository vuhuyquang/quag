export function formatDate(dateString: string) {
  const now = new Date();
  const date = new Date(dateString.replace(/(\d{4})\/(\d{2})\/(\d{2})/, '$1-$2-$3'));
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diffInSeconds < 60) return `${Math.floor(diffInSeconds)} giây trước`;
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) return `${diffInMinutes} phút trước`;
  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) return `${diffInHours} giờ trước`;
  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 30) return `${diffInDays} ngày trước`;
  const diffInMonths = Math.floor(diffInDays / 30);
  if (diffInMonths < 12) return `${diffInMonths} tháng trước`;
  const diffInYears = Math.floor(diffInMonths / 12);
  return `${diffInYears} năm trước`;
}
