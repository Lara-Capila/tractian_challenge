import { Typography } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';

export default function Error() {
  const { Text, Title } = Typography;

  const history = useHistory();

  function goBack() {
    history.goBack();
  }

  return (
    <section>
      <Title level={ 2 }>
        <Text type="danger">Ops! Erro ao carregar o conteúdo.</Text>
      </Title>
      Volta a página principal
      <Link to="/" onClick={ () => goBack }>Voltar</Link>
    </section>
  );
}
