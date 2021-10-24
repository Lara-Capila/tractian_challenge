/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';

import { Card, Col, Row, Skeleton } from 'antd';
import { WarningTwoTone, StopTwoTone, ToolTwoTone } from '@ant-design/icons';

import getAllAssets from '../services/requestAPI';

export default function Cards() {
  const [allAssets, setAllAssets] = useState(null);

  useEffect(() => {
    const getAll = () => {
      getAllAssets().then((res) => setAllAssets(res));
    };

    getAll();
  }, []);

  return (
    <div className="site-card-wrapper">
      <Row gutter={ 16 }>
        <Col span={ 8 }>
          <Card
            title="Em Alerta"
            extra={
              <WarningTwoTone twoToneColor="#FF0000" style={ { fontSize: 20 } } />
            }
            bordered
            style={ { width: 300 } }
          >
            {!allAssets
              ? <Skeleton active />
              : allAssets ? allAssets.filter(((status) => status.status === 'inAlert'))
                .map((status) => (
                  <div key={ status.id }>{status.name}</div>
                )) : null}
          </Card>
        </Col>
        <Col span={ 8 }>
          <Card
            title="Em Parada"
            bordered
            extra={ <StopTwoTone twoToneColor="#DAA520" style={ { fontSize: 20 } } /> }
            style={ { width: 300 } }
          >
            {!allAssets
              ? <Skeleton active />
              : allAssets ? allAssets.filter(((status) => status.status === 'inDowntime'))
                .map((status) => (
                  <div key={ status.id }>{status.name}</div>
                )) : null}
          </Card>
        </Col>
        <Col span={ 8 }>
          <Card
            title="Em Operação"
            bordered
            extra={ <ToolTwoTone twoToneColor="#008000" style={ { fontSize: 20 } } /> }
            style={ { width: 300 } }
          >
            {!allAssets
              ? <Skeleton active />
              : allAssets ? allAssets
                .filter(((status) => status.status === 'inOperation'))
                .map((status) => (
                  <div key={ status.id }>{status.name}</div>
                )) : null}
          </Card>
        </Col>
      </Row>
    </div>
  );
}
