/* eslint-disable no-nested-ternary */
import React, { useContext } from 'react';

import { Card, Col, Row } from 'antd';
// import { WarningTwoTone, StopTwoTone, ToolTwoTone } from '@ant-design/icons';
// import { Link } from 'react-router-dom';
import AssetsContext from '../context/AssetsContext';

export default function Cards() {
  const { allAssets } = useContext(AssetsContext);

  // const data = [
  //   { id: 1, title: 'Em Alerta', icon: WarningTwoTone },
  //   { id: 2, title: 'Em Parada', icon: StopTwoTone },
  //   { id: 3, title: 'Em Operação', icon: ToolTwoTone },
  // ];

  // function handleClick(e) {
  //   console.log('event handle click', e);
  // }

  return (
    <div className="site-card-wrapper">
      <Row gutter={ 18 }>
        <Col span={ 6 } style={ { width: 100, display: 'flex' } }>
          {allAssets ? allAssets.map((asset) => (
            <section key={ asset.id } style={ { flexWrap: 'wrap' } }>
              <Card
                // title={ asset.status }
                // bordered={ false }
                // extra={ <StopTwoTone twoToneColor="#DAA520" style={ { fontSize: 20 } } /> }
                style={ { width: 300 } }

              >
                {asset.name}
                <img src={ asset.image } alt={ asset.name } style={ { width: 200 } } />
              </Card>
            </section>
          )) : null}
        </Col>
      </Row>
    </div>
  );
}
