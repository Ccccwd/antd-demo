import { render } from '@testing-library/react';
import { Space, Table } from 'antd';
import React from 'react';
const columns = [
    {
        title: '序号',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: '题目',
        dataIndex: 'question',
        key: 'question',
        render: (text) => <a>{text}</a>,
    },
    {
        title: '选项',
        dataIndex: 'options',
        key: 'options',
        render: (options) => options.join(', ')
    },
    {
        title: '答案',
        dataIndex: 'answer',
        key: 'answer',
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
        question: '什么是React？',
        options: ['A. 一个库', 'B. 一个框架', 'C. 一个语言'],
        answer: 'A'
    },
    {
        key: '2',
        id: '2',
        question: 'React的生命周期函数有哪些？',
        options: ['A. componentDidMount', ' B. componentDidUpdate', ' C. componentWillUnmount'],
        answer: 'A'
    },
    {
        key: '3',
        id: '3',
        question: 'React的状态管理有哪些方式？',
        options: ['A. Redux', ' B. MobX', ' C. Context API'],
        answer: 'A'
    },
    {
        key: '4',
        id: '4',
        question: 'React的性能优化手段有哪些？',
        options: ['A. 代码分割', ' B. 懒加载', 'C. 服务器端渲染'],
        answer: 'A'
    },
    {
        key: '5',
        id: '5',
        question: 'React的路由管理有哪些方式？',
        options: ['A. React Router', 'B. Next.js', 'C. Reach Router'],
        answer: 'A'
    }
];

const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
};

const App = () => <Table
    columns={columns}
    dataSource={data}
    pagination={{
        current: 1, // 当前页码
        pageSize: 5, // 每页条数
        total: 100, // 数据总数
        showSizeChanger: false,
        position: ['bottomLeft'],
        onChange: () => { /* 页码或每页条数变化时的回调 */ },
    }}
    onChange={onChange} />;
export default App;