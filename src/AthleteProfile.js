import React from 'react';
import { Card, Avatar, Typography, Row, Col } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const AthleteProfile = ({ athlete }) => {
  const { name, sport, gender, age, goals, accomplishments } = athlete;

  return (
    <Card>
      <Card.Meta
        avatar={<Avatar icon={<UserOutlined />} />}
        title={<Title level={4}>{name}</Title>}
        description={sport}
      />

      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Text strong>Gender:</Text> {gender}
        </Col>
        <Col span={12}>
          <Text strong>Age:</Text> {age}
        </Col>
      </Row>

      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Text strong>Goals:</Text> {goals}
        </Col>
      </Row>

      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Text strong>Accomplishments:</Text> {accomplishments}
        </Col>
      </Row>
    </Card>
  );
};

export default AthleteProfile;
