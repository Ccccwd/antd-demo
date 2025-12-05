import { Space, Table } from 'antd';
import React from 'react';
import axios from 'axios';

import {useState, useEffect} from 'react';

const columns = [
    {
        title: '序号',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: '用户名',
        dataIndex: 'userName',
        key: 'userName',
        render: (text) => <a>{text}</a>,
    },
    {
        title: '日期',
        dataIndex: 'updateTime',
        key: 'updateTime',
        render: (text) => text ? new Date(text).toLocaleString() : '',
    },
    {
        title: '操作',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <a>编辑</a>
                <a>删除</a>
            </Space>
        ),
    },
];
const data = [
    {
        key: '1',
        id: '1',
        name: 'John Brown',
        date: '2025-9-11'
    },
    {
        key: '2',
        id: '2',
        name: 'Jim Green',
        date: '2025-9-11'
    },
    {
        key: '3',
        id: '3',
        name: 'Joe Black',
        date: '2025-9-11'
    },
    {
        key: '4',
        id: '4',
        name: 'Joe Black',
        date: '2025-9-11'
    },
    {
        key: '5',
        id: '5',
        name: 'Joe Black',
        date: '2025-9-11'
    }
];

const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
};

const App = () => {
    const [data, setData] = useState([]);
    
    const [pagination, setPagination] = useState({
        current: 1,
        pageSize: 5,
        total: 0,
        showSizeChanger: false,
        position: ['bottomLeft'],
    });
    const [loading, setLoading] = useState(false);

    const fetchData = (page = 1, pageSize = 5) => {
        setLoading(true);
        const token = localStorage.getItem('token');
        axios
            .get(`http://localhost:8080/users?page=${page}&pageSize=${pageSize}`, {
                headers: {
                    token: token,
                },
            })
            .then((response) => {
                const res = response.data;
                setData(res.data.row.map((item) => ({
                    key: item.id,
                    id: item.id,
                    userName: item.userName,
                    updateTime: item.updateTime,
                })));
                setPagination((prev) => ({
                    ...prev,
                    current: page,
                    pageSize: pageSize,
                    total: res.data.total,
                }));
            })
            .catch((error) => {
                console.error("Error fetching users:", error);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchData(pagination.current, pagination.pageSize);
    }, []);

    const handleTableChange = (pag) => {
        fetchData(pag.current, pag.pageSize);
    };

    return (
        <Table
            columns={columns}
            dataSource={data}
            pagination={pagination}
            loading={loading}
            onChange={handleTableChange}
        />
    );
};
export default App;