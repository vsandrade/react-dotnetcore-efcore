import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';
import TitlePage from '../../components/TitlePage';

export default function ClienteForm() {
    let history = useHistory();
    let { id } = useParams();

    return (
        <>
            <TitlePage
                title={'Cliente Detalhes ' + (id !== undefined ? id : '')}
            >
                <Button
                    variant='outline-secondary'
                    onClick={() => history.goBack()}
                >
                    <i className='fas fa-arrow-left me-2'></i>
                    Voltar
                </Button>
            </TitlePage>
            <div></div>
        </>
    );
}
