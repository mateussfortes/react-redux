import { createStandaloneToast } from "@chakra-ui/toast";
import { createListenerMiddleware } from "@reduxjs/toolkit";
import categoriasService from "services/categorias";
import { adicionarTodasAsCategorias, carregarCategorias } from "store/reducers/categorias";

export const listener = createListenerMiddleware();

const { toast } = createStandaloneToast();

listener.startListening({
    actionCreator: carregarCategorias,
    effect: async (action, { dispatch, fork, unsubscribe }) => {
        toast({
            title: 'Carregando',
            description: 'Categorias carregando..',
            status: 'loading',
            duration: 2000,
            isClosable: true,
        });
        const tarefa = fork(async api => {
            await api.delay(1000);
            return await categoriasService.buscar();
        });
        const resposta = await tarefa.result;
        if(resposta.status === 'ok') {
            dispatch(adicionarTodasAsCategorias(resposta.value));
            toast({
                title: 'Sucesso!',
                description: 'Categorias carregadas com sucesso!',
                status: 'success',
                duration: 2000,
                isClosable: true,
            });
            unsubscribe();
        }
        if(resposta.status == 'rejected') {
            toast({
                title: 'Erro',
                description: 'Erro na busca por categorias.',
                status: 'error',
                duration: 2000,
                isClosable: true,
            }); 
        }
    }
});