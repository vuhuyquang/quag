'use client';

import { Button, Form, Input } from 'antd';

const { TextArea } = Input;

export default function Contact() {
  const scrollToMap = () => {
    const mapSection = document.getElementById('map-section');
    if (mapSection) {
      mapSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFormSubmit = (values: any) => {
    console.log('Form values:', values);
  };

  return (
    <div className="w-screen min-h-screen bg-gray-100">
      {/* Bản đồ */}
      <div id="map-section" className="w-screen h-[450px] md:h-[600px]">
        <iframe
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.5713876763016!2d105.78160337587204!3d21.009811488427854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135acab11ec72b9%3A0x4a34e18cc7b3b035!2zUC4gxJDhu5cgxJDhu6ljIEThu6VjLCBN4buFIFRyw6wsIE5hbSBU4burIExpw6ptLCBIw6AgTuG7mWksIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1723001579181!5m2!1sen!2s"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Phần liên hệ */}
      <div className="container mx-auto px-4 py-8 md:px-8 text-black">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 w-full">
          <div className="col-span-1 md:col-span-12 bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-700">Thông tin liên hệ</h2>
            <p className="mb-2 text-gray-600">Địa chỉ: Đường Đỗ Đức Dục, TP. Hà Nội</p>
            <p className="mb-2 text-gray-600">Số điện thoại: 0344-396-798</p>
            <p className="mb-2 text-gray-600">Email: quangvh.technical@gmail.com</p>
            <p className="mb-2 text-gray-600">Giờ làm việc: 9:00 AM - 23:00 PM, Thứ Hai đến Thứ Sáu</p>
            <Button
              type="link"
              onClick={scrollToMap}
              className="bg-white text-blue-500 hover:underline shadow-lg rounded-lg"
            >
              Xem bản đồ
            </Button>
          </div>

          <div className="col-span-1 md:col-span-12">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-700">Form liên hệ</h2>
              <Form layout="vertical" onFinish={handleFormSubmit}>
                <Form.Item
                  name="name"
                  label="Tên"
                  rules={[{ required: true, message: 'Vui lòng nhập tên của bạn!' }]}
                >
                  <Input placeholder="Nhập tên của bạn" className="border-gray-300 rounded-lg" />
                </Form.Item>
                <Form.Item
                  name="email"
                  label="Email"
                  rules={[
                    { required: true, message: 'Vui lòng nhập email của bạn!' },
                    { type: 'email', message: 'Email không hợp lệ!' },
                  ]}
                >
                  <Input placeholder="Nhập email của bạn" className="border-gray-300 rounded-lg" />
                </Form.Item>
                <Form.Item
                  name="message"
                  label="Tin nhắn"
                  rules={[{ required: true, message: 'Vui lòng nhập tin nhắn của bạn!' }]}
                >
                  <TextArea rows={4} placeholder="Nhập tin nhắn của bạn" className="border-gray-300 rounded-lg" />
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit" className="bg-blue-500 hover:bg-blue-600">
                    Gửi
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
