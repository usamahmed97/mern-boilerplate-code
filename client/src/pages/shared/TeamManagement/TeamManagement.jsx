import React from "react";
import { Dropdown, Table } from "antd";
import PendingIcon from "@mui/icons-material/Pending";

const TeamManagement = () => {
  const columns = [
    {
      title: <div className="text-themeGrey font-normal text-sm">ID</div>,
      dataIndex: "id",
      key: "id",
      width: "10%",
    },
    {
      title: <div className="text-themeGrey font-normal text-sm">Name</div>,
      dataIndex: "name",
      key: "name",
      width: "25%",
    },

    {
      title: <div className="text-themeGrey font-normal text-sm">API key</div>,
      dataIndex: "APIKey",
      key: "APIKey",
      width: "20%",
    },

    {
      title: <div className="text-themeGrey font-normal text-sm">Partner</div>,
      dataIndex: "partner",
      key: "partner",
    },

    {
      title: <div className="text-themeGrey font-normal text-sm">Created</div>,
      dataIndex: "created",
      key: "created",
    },

    {
      title: "",
      key: "action",
      align: "right",
      render: (_, record) => {
        return <PendingIcon className="text-themeGrey" />;
      },
    },
  ];

  const data = [
    {
      key: "14501",
      id: "14501",
      name: "Temp",
      APIKey: "f52d****7fbf",
      partner: "",
      created: "2023-04-18 16:01:56",
    },
    {
      key: "13943",
      id: "13943",
      name: "test",
      APIKey: "f52d****7fbf",
      partner: "",
      created: "2023-04-18 16:01:56",
    },
    {
      key: "16669",
      id: "16669",
      name: "Test New",
      APIKey: "f52d****7fbf",
      partner: "",
      created: "2023-04-18 16:01:56",
    },
    {
      key: "16458",
      id: "16458",
      name: "test",
      APIKey: "f52d****7fbf",
      partner: "",
      created: "2023-04-18 16:01:56",
    },
    {
      key: "14150",
      id: "14150",
      name: "Test - API",
      APIKey: "f52d****7fbf",
      partner: "",
      created: "2023-04-18 16:01:56",
    },
    {
      key: "14263",
      id: "14263",
      name: "test - API",
      APIKey: "f52d****7fbf",
      partner: "",
      created: "2023-04-18 16:01:56",
    },
    {
      key: "14784",
      id: "14784",
      name: "Test",
      APIKey: "f52d****7fbf",
      partner: "",
      created: "2023-04-18 16:01:56",
    },
    {
      key: "17997",
      id: "17997",
      name: "Test",
      APIKey: "f52d****7fbf",
      partner: "",
      created: "2023-04-18 16:01:56",
    },
    {
      key: "17296",
      id: "17296",
      name: "Test",
      APIKey: "f52d****7fbf",
      partner: "",
      created: "2023-04-18 16:01:56",
    },
    {
      key: "14155",
      id: "14155",
      name: "Test",
      APIKey: "f52d****7fbf",
      partner: "",
      created: "2023-04-18 16:01:56",
    },
  ];

  const handleRowClick = (record) => {
    console.log({ record });
  };
  return (
    <div className="h-screen py-5 mx-5">
      <div className="text-xl font-bold">Team Management</div>
      <div>
        <div>
          <Table
            className="border-t border-creme"
            columns={columns}
            dataSource={data}
            scroll={{
              x: 1000,
            }}
            onRow={(record) => ({
              onClick: () => handleRowClick(record),
              className: "cursor-pointer",
            })}
          />
        </div>
      </div>
    </div>
  );
};

export default TeamManagement;
