import { AudioOutlined } from '@ant-design/icons';
import { Input, Space, Button } from 'antd';
import React from 'react';

const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);
const onSearch = (value) => console.log(value);

const App = () => (
  <Space direction="horizontal">
    <Search
      placeholder="请输入关键词"
      allowClear
      enterButton="查询题目"
      size="large"
      onSearch={onSearch}
    />
    <Button type="primary" onClick={() => alert('自定义按钮点击')}>
      添加题目
    </Button>
  </Space>
);
export default App;