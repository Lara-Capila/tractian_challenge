/* eslint-disable no-nested-ternary */
import React, { useContext } from 'react';

import { Card, Col, Row, Skeleton, Button } from 'antd';
import { WarningTwoTone, StopTwoTone, ToolTwoTone } from '@ant-design/icons';
import AssetsContext from '../context/AssetsContext';

export default function Cards() {
  const { allAssets } = useContext(AssetsContext);

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
            <Button
              disabled={ !allAssets }
              type="primary"
              block
              style={ { marginTop: 15 } }
            >
              Ver todos
            </Button>
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
            <Button
              disabled={ !allAssets }
              type="primary"
              block
              style={ { marginTop: 15 } }
            >
              Ver todos

            </Button>
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
            <Button
              disabled={ !allAssets }
              type="primary"
              block
              style={ { marginTop: 15 } }
            >
              Ver todos
            </Button>

          </Card>
        </Col>
      </Row>
    </div>
  );
}
