/* eslint-disable no-nested-ternary */
import React, { useContext } from 'react';

import { Card, Col, Row, Skeleton } from 'antd';
import { WarningTwoTone, StopTwoTone, ToolTwoTone } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import AssetsContext from '../context/AssetsContext';

export default function Cards() {
  const { allAssets } = useContext(AssetsContext);

  function handleClick(e) {
    console.log('event handle click', e);
  }

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
              : allAssets ? allAssets.filter(((asset) => asset.status === 'inAlert'))
                .map((asset) => (
                  <section
                    key={ asset.id }
                    name={ asset.name }
                    value={ asset.id }
                  >
                    <div>{asset.name}</div>
                    <Link
                      to="/details"
                      onClick={ (e) => handleClick(e) }
                    >
                      Saiba mais
                    </Link>
                  </section>
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
                .map((asset) => (
                  <div key={ asset.id }>{asset.name}</div>
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
                .map((asset) => (
                  <div key={ asset.id }>{asset.name}</div>
                )) : null}
          </Card>
        </Col>
      </Row>
    </div>
  );
}
