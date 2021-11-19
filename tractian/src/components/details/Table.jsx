import React, { useContext, useState } from 'react';
import { Input, Modal, notification, Space, Table, Select, Typography } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import AssetsContext from '../../context/AssetsContext';

export default function TableDetails() {
  const { idAsset } = useContext(AssetsContext);
  const [isEditing, setIsEditing] = useState(false);
  const [editingAsset, setEditingAsset] = useState(null);

  const [dataSource, setDataSource] = useState([
    {
      id: idAsset.id,
      modelo: idAsset.model,
      sensor: idAsset.sensors,
      empresa: idAsset.company.name,
      unidade: idAsset.unit.name,
      responsavel: idAsset.users,
      atualizacao: idAsset.metrics.lastUptimeAt,
    },
  ]);

  const { Title } = Typography;

  const onEditAsset = (record) => {
    setIsEditing(true);
    setEditingAsset({ ...record });
  };

  const openNotificationWithIcon = (type) => {
    const messageSucces = {
      message: 'Sucesso',
      description: 'Dados alterados com sucesso!',
    };

    const messageWarning = {
      message: 'Atenção!',
      description: 'Operação cancelada!',
    };

    notification[type](
      type === 'success' ? messageSucces : messageWarning,
    );
  };

  const columns = [
    {
      title: 'Modelo',
      dataIndex: 'modelo',
      key: 'name',
    },
    {
      title: 'Sensor',
      dataIndex: 'sensor',
      key: 'name',
    },
    {
      title: 'Empresa',
      dataIndex: 'empresa',
      key: 'name',
    },
    {
      title: 'Unidade',
      dataIndex: 'unidade',
      key: 'name',
    },
    {
      title: 'Responsável',
      dataIndex: 'responsavel',
      key: 'name',
    },
    {
      title: 'Útima atualização',
      dataIndex: 'atualizacao',
      key: 'atualizacao',
    },
    {
      title: 'Action',
      key: 'action',
      render: (record) => (
        <Space size="middle" style={ { display: 'flex', justifyContent: 'center' } }>
          <EditOutlined onClick={ () => onEditAsset(record) } />
        </Space>
      ),
    },
  ];

  const { Option } = Select;

  // a ação de editar foi contruída com a ajuda deste vídeo https://www.youtube.com/watch?v=y4_nSE-aZhc&ab_channel=CodeWithAamir
  return (
    <section>
      <Table
        pagination={ false }
        columns={ columns }
        dataSource={ dataSource }
      />
      <Modal
        title="Editar Ativo"
        visible={ isEditing }
        okText="Save"
        onCancel={ () => {
          setIsEditing(false);
          openNotificationWithIcon('warning');
        } }
        onOk={ () => {
          setDataSource(((prev) => prev.map((asset) => {
            if (asset.id === editingAsset.id) {
              return editingAsset;
            }
            return asset;
          })));
          setIsEditing(false);
          openNotificationWithIcon('success');
        } }
      >
        <Input
          addonBefore="Sensor"
          value={ editingAsset?.sensor }
          onChange={ (e) => {
            setEditingAsset((prev) => ({ ...prev, sensor: e.target.value }));
          } }
        />

        <Input
          addonBefore="Empresa"
          value={ editingAsset?.empresa }
          onChange={ (e) => {
            setEditingAsset((prev) => ({ ...prev, empresa: e.target.value }));
          } }
        />

        <Input
          addonBefore="Unidade"
          value={ editingAsset?.unidade }
          onChange={ (e) => {
            setEditingAsset((prev) => ({ ...prev, unidade: e.target.value }));
          } }
        />

        <Input
          addonBefore="Última Atualização"
          value={ editingAsset?.atualizacao }
          onChange={ (e) => {
            setEditingAsset((prev) => ({ ...prev, atualizacao: e.target.value }));
          } }
        />
        <section style={ { margin: '10px 0', border: '1px solid #d9d9d9', padding: 10 } }>
          <Title level={ 5 }>Responsáveis</Title>
          <Select
            mode="multiple"
            placeholder="Please select"
            defaultValue={ editingAsset?.responsavel }
            onChange={ (value) => {
              setEditingAsset((prev) => ({ ...prev, responsavel: value }));
            } }
            style={ { width: '100%' } }
          >
            {idAsset.Allusers.map((user) => (
              <Option key={ user.name }>{user.name}</Option>
            ))}
          </Select>

        </section>

      </Modal>

    </section>
  );
}
