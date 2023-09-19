import { useState, useEffect } from "react";
import { Form, Input, Button, Select, message, Table, Tabs } from "antd";

import "../App.css";

const { Option } = Select;

function Dashboard() {
  const [categories, setCategories] = useState([]);

  const [galery, setGalery] = useState([]);

  const [form2] = Form.useForm();
  const [form3] = Form.useForm();

  useEffect(() => {
    const getCategories = async () => {
      const res = await fetch(
        `${import.meta.env.VITE_APP_SERVER_URL}/api/categories/get-category-all`
      );
      res.json().then((json) => {
        setCategories(json);
      });
    };
    getCategories();
  }, []);

  useEffect(() => {
    const getGalery = async () => {
      const res = await fetch(
        `${import.meta.env.VITE_APP_SERVER_URL}/api/galery/get-galery-all`
      );
      res.json().then((json) => {
        setGalery(json);
      });
    };
    getGalery();
  }, []);

  const onFinish = (values) => {
    try {
      fetch(
        `${import.meta.env.VITE_APP_SERVER_URL}/api/categories/add-category`,
        {
          method: "POST",
          body: JSON.stringify(values),
          headers: { "Content-type": "application/json; charset=UTF-8" },
        }
      );
      message.success("Kategori başarıyla eklendi");
      form2.resetFields();
      setCategories([
        ...categories,
        {
          _id: Math.random(),
          title: values.title,
        },
      ]);
    } catch (error) {
      console.log(error);
    }
  };

  const onFinish3 = (values) => {
    try {
      fetch(`${import.meta.env.VITE_APP_SERVER_URL}/api/galery/add-galery`, {
        method: "POST",
        body: JSON.stringify(values),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      });
      message.success("Ürün başarıyla eklendi");
      form3.resetFields();
      setGalery([
        ...galery,
        {
          ...values,
          _id: Math.random(),
        },
      ]);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteCategory = (id) => {
    try {
      fetch(
        `${import.meta.env.VITE_APP_SERVER_URL}/api/categories/delete-category`,
        {
          method: "DELETE",
          body: JSON.stringify({ categoryId: id }),
          headers: { "Content-type": "application/json; charset=UTF-8" },
        }
      );
      message.success("Başarıyla Silindi");
      setCategories(categories.filter((Item) => Item._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const deleteGalery = (id) => {
    try {
      fetch(`${import.meta.env.VITE_APP_SERVER_URL}/api/galery/delete-galery`, {
        method: "DELETE",
        body: JSON.stringify({ galeryId: id }),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      });
      window.location.reload();
      message.success("Başarıyla Silindi");
      setGalery(galery.filter((Item) => Item._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const columns = [
    {
      title: "Kategori Listesi",
      dataIndex: "title",
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (text, record) => {
        return (
          <div>
            <Button
              type="link"
              danger
              onClick={() => deleteCategory(record._id)}
            >
              Sil
            </Button>
          </div>
        );
      },
    },
  ];

  const columns3 = [
    {
      title: "Ürün Adı",
      dataIndex: "title",
      width: "8%",
    },
    {
      title: "Ürün Görseli",
      dataIndex: "img",
      width: "20%",
      render: (_, record) => {
        return <img src={record.img} className="tabs_img"></img>;
      },
    },
    {
      title: "Kategori",
      dataIndex: "category",
      width: "8%",
    },
    {
      title: "Action",
      dataIndex: "action",
      width: "8%",
      render: (text, record) => {
        return (
          <div>
            <Button type="link" danger onClick={() => deleteGalery(record._id)}>
              Sil
            </Button>
          </div>
        );
      },
    },
  ];

  const items = [
    {
      key: "1",
      label: <h4>Kategori Ekle</h4>,
      children: (
        <div className="dashboard container dashboard_main">
          <Form onFinish={onFinish} form={form2}>
            <label> Kategori İsmi</label>
            <Form.Item
              name="title"
              rules={[
                {
                  required: true,
                  message: "Bu alanı doldurmanız zorunludur!",
                },
              ]}
            >
              <Input placeholder="Kategori İsmi" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Kategori Ekle
              </Button>
            </Form.Item>
          </Form>
          <div className="dashboard_category">
            <Table
              dataSource={categories}
              columns={columns}
              pagination={{ pageSize: 5 }}
              rowKey={"_id"}
            />
          </div>
        </div>
      ),
    },
    {
      key: "3",
      label: <h4>Foto Ekle</h4>,
      children: (
        <div className="dashboard container dashboard_main">
          <Form onFinish={onFinish3} form={form3}>
            <label> Foto Açıklaması</label>
            <Form.Item
              name="title"
              rules={[
                {
                  required: true,
                  message: "Bu alanı doldurmanız zorunludur!",
                },
              ]}
            >
              <Input placeholder="Foto Açıklaması" />
            </Form.Item>

            <label> Foto Linki</label>
            <Form.Item name="img">
              <Input placeholder="Foto Linki" />
            </Form.Item>

            <label>Kategori Seç</label>
            <Form.Item name="category">
              <Select placeholder="Kategori Seç">
                {categories.map((item) => (
                  <Option key={item._id} value={item.title}>
                    {item.title}
                  </Option>
                ))}
              </Select>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Fotoğrafı Ekle
              </Button>
            </Form.Item>
          </Form>
          <div className="dashboard_category">
            <Table
              dataSource={galery}
              columns={columns3}
              pagination={{ pageSize: 5 }}
              rowKey={"_id"}
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="dashboard">
      <div className="header_title">
        <h1>Admin Paneli</h1>
      </div>
      <Tabs defaultActiveKey="1" items={items} />
    </div>
  );
}

export default Dashboard;
