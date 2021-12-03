/* eslint-disable no-nested-ternary */
import React, { useContext } from 'react';

import { Card, Skeleton } from 'antd';
import {
  WarningTwoTone,
  StopTwoTone,
  ToolTwoTone,
  HeartTwoTone,
} from '@ant-design/icons';
import { useHistory } from 'react-router';
import AssetsContext from '../context/AssetsContext';
import { getAssetById } from '../services/assetsRequest';

export default function Cards() {
  const { allAssets, setIdAsset } = useContext(AssetsContext);
  const history = useHistory();

  const cardInfo = [
    {
      id: 1,
      title: 'Em Alerta',
      status: 'inAlert',
      icon: WarningTwoTone,
      color: '#FF0000',
      iconHealthScore: HeartTwoTone,
    },
    {
      id: 2,
      title: 'Em Parada',
      status: 'inDowntime',
      icon: StopTwoTone,
      color: '#DAA520',
    },
    {
      id: 3,
      title: 'Em Operação',
      status: 'inOperation',
      icon: ToolTwoTone,
      color: '#008000',
    },
  ];

  const HEART_GREEN = 70;

  function handleClick(id) {
    getAssetById(id).then((res) => setIdAsset(res));
    history.push('/details');
  }

  const getAssetsByStatus = (assets, status) => assets
    .filter((el) => el.status === status);

  return (
    <div
      className="site-card-wrapper"
      style={ { display: 'flex', justifyContent: 'space-evenly' } }
    >
      {allAssets ? cardInfo.map((item) => (
        <section key={ item.id }>
          <Card
            title={ item.title }
            bordered={ false }
            extra={
              <item.icon twoToneColor={ item.color } style={ { fontSize: 20 } } />
            }
            style={ { width: 300 } }

          >
            {getAssetsByStatus(allAssets, item.status)
              .map((el) => (
                <div
                  onClick={ () => handleClick(el.id) }
                  onKeyPress={ () => handleClick(el.id) }
                  role="button"
                  tabIndex={ 0 }
                  key={ el.id }
                  style={
                    {
                      border: '1px solid #DCDCDC',
                      borderRadius: 8,
                      padding: 8,
                      marginBottom: 10,
                      textAlign: 'center' }
                  }
                >
                  <h3>{el.name}</h3>
                  <div
                    style={
                      {
                        display: 'flex',
                        justifyContent: 'center',
                        paddingTop: 10,
                        paddingRight: 8 }
                    }
                  >
                    <HeartTwoTone
                      style={ { fontSize: 20 } }
                      twoToneColor={
                        el.healthscore >= HEART_GREEN ? '#2ebb2e' : '#FF0000'
                      }
                    />
                    <span style={ { padding: '0 8px' } }>Saúde:</span>
                    <span>
                      {el.healthscore}
                      %
                    </span>
                  </div>
                </div>
              ))}
          </Card>
        </section>
      )) : <Skeleton active />}
    </div>
  );
}
