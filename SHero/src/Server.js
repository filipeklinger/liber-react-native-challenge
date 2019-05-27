const token = 'sadiuhfiuewh'
const raiz = `https://superheroapi.com/api/${token}`;
export default {
    //todos os endpoints da aplicação
    id: id => `${raiz}/${id}`,
    nome: `${raiz}/search/name`,
    powerstats: id => `${raiz}/${id}/powerstats`,
    biography: id => `${raiz}/${id}/biography`,
    appearance: id => `${raiz}/${id}/appearance`,
    work: id => `${raiz}/${id}/work`,
    connections: id => `${raiz}/${id}/connections`,
    image: id => `${raiz}/${id}/image`,
}