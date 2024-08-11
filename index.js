import * as utils from './src/utils.js';
import { cnh } from "./src/generators/cnh.js"
import { cnpj } from "./src/generators/cnpj.js"
import { cpf } from "./src/generators/cpf.js"
import { rg } from "./src/generators/rg.js"
import { pis } from "./src/generators/pis.js"
import { cns } from "./src/generators/cartao-nacional-saude.js"
import { passaporte } from "./src/generators/passaporte.js"
import { tituloEleitor } from "./src/generators/titulo-eleitor.js"
import { dataNascimento } from "./src/generators/data-nascimento.js"
import { email } from "./src/generators/email.js"
import { endereco, enderecoFnc } from "./src/generators/endereco.js"
import { placaAntiga, placaMercosul } from "./src/generators/placa.js"

const nomeMasculino = utils.nomeMasculinoRand,
  nomeFeminino = utils.nomeFemininoRand,
  nomeDoMeio = utils.nomeDoMeioRand,
  sobrenome = utils.sobrenomeRand,
  nomeMasculinoCompleto = `${nomeMasculino} ${nomeDoMeio} ${sobrenome}`,
  nomeFemininoCompleto = `${nomeFeminino} ${nomeDoMeio} ${sobrenome}`,
  nomePai = `${utils.nomePaiRand} ${nomeDoMeio} ${sobrenome}`,
  nomeMae = `${utils.nomeMaeRand} ${nomeDoMeio} ${sobrenome}`,
  apelido = utils.apelidoRand,
  corPele = utils.corPeleRand,
  tipoSanguineo = utils.tipoSanguineoRand,
  orientacaoSexual = utils.orientacaoSexualRand,
  identidadeGenero = utils.identidadeGeneroRand,
  identidadePorOrientacao = utils.identidadePorOrientacaoRand,
  provedorEmail = utils.provedorEmailRand,
  cnhCategoria = utils.categoriaCnhRand;



const gerar = {
  nomeMasculino,
  nomeFeminino,
  nomeDoMeio,
  sobrenome,
  nomeMasculinoCompleto,
  nomeFemininoCompleto,
  nomePai,
  nomeMae,
  apelido,
  dataNascimento,
  corPele,
  tipoSanguineo,
  orientacaoSexual,
  identidadeGenero,
  identidadePorOrientacao,
  provedorEmail,
  cnh,
  cnhCategoria
};


/**
 * Gera um número de CNH aleatório.
 *
 * @returns {string} O número de CNH gerado.
 * @example
 * // CNH gerado
 * console.log(gerar.cnh); // "123456789012"
 */
gerar.cnh = cnh;



/**
 * Gera um número de CNPJ aleatório.
 * @param {boolean} mask - Se `true`, o CNPJ será retornado com a máscara de formatação (xx.xxx.xxx/0001-xx). Se `false`, o CNPJ será retornado apenas com os dígitos.
 * @returns {string} O CNPJ gerado.
 * @example
 * // CNPJ com máscara
 * console.log(cnpj(true)); // "12.345.678/0001-00"
 *
 * // CNPJ sem máscara
 * console.log(cnpj(false)); // "12345678000100"
 */
gerar.cnpj = cnpj;


/**
 * Gera um número de CPF aleatório.
 * @param {boolean} mask - Se `true`, o CPF será retornado com a máscara de formatação (xxx.xxx.xxx-xx). Se `false`, o CPF será retornado apenas com os dígitos.
 * @param {string} [state] - A sigla do estado para determinar a origem do CPF. Se não fornecido, será escolhido um estado aleatório.
 * @returns {string} O CPF gerado.
 * @example
 * // CPF com máscara e do estado informado
 * console.log(cpf(true, "PR")); // "123.456.789-09"
 *
 * // CPF sem máscara de formatação
 * console.log(cpf(false, "SC")); // "12345678909"
 *
 * // CPF com estado aleatório
 * console.log(cpf(true)); // "987.654.321-00"
 */
gerar.cpf = cpf;


/**
 * Gera um número de RG aleatório.
 * @param {boolean} mask - Se `true`, o RG será retornado com a máscara de formatação (xx.xxx.xxx-x). Se `false`, o RG será retornado apenas com os dígitos.
 * @returns {string} O RG gerado.
 * @example
 * // RG com máscara
 * console.log(gerar.rg(true)); // "12.345.678-9"
 *
 * // RG sem máscara
 * console.log(gerar.rg(false)); // "123456789"
 */
gerar.rg = rg;


/**
 * Gera um número de Cartão Nacional de Saúde (CNS) aleatório. Com máscara ou sem máscara
 * @param {boolean} [mask=false] - Se `true`, o CNS será retornado com a máscara de formatação (XXX XXXX XXXX XXXX). Se `false`, o CNS será retornado apenas com os dígitos.
 * @returns {string} O número de CNS gerado.
 * @example
 * // CNS sem máscara
 * console.log(gerar.cns()); // "123456789012345"
 *
 * // CNS com máscara
 * console.log(gerar.cns(true)); // "123 4567 8901 2345"
 */
gerar.cns = cns;

/**
 * Gera um número de PIS aleatório.
 * @param {boolean} [mask=false] - Se `true`, o PIS será retornado com a máscara de formatação (xxx.xxxxx.xx.x). Se `false`, o PIS será retornado apenas com os dígitos.
 * @returns {string} O número de PIS gerado.
 * @example
 * // PIS sem máscara
 * console.log(pis()); // "12345678912"
 *
 * // PIS com máscara
 * console.log(pis(true)); // "123.45678.91.2"
 */
gerar.pis = pis;


/**
 * Gera um Título de Eleitor aleatório.
 * @param {boolean} mask - Se `true`, o Título de Eleitor será retornado com a máscara de formatação (xxxx xxxx xxxx xxxx). Se `false`, será retornado apenas com os dígitos.
 * @param {string} [state] - A sigla do estado para determinar a origem do Título de Eleitor. Se não fornecido, será escolhido um estado aleatório.
 * @returns {string} O Título de Eleitor gerado.
 * @example
 *
 * // Título de Eleitor sem máscara e do estado aleatório
 * console.log(gerar.tituloEleitor()); // "123456789012"
 *
 * // Título de Eleitor com máscara e do estado aleatório
 * console.log(gerar.tituloEleitor(true)); // "1234 5678 9012"
 *
  * // Título de Eleitor sem máscara e do estado informado
 * console.log(gerar.tituloEleitor(false, 'ES')); // "123456789012"
 *
 * // Título de Eleitor com máscara e do estado informado
 * console.log(gerar.tituloEleitor(true, 'PE')); // "1234 5678 9012"
 */
gerar.tituloEleitor = tituloEleitor;


/**
 * Gera um número de Passoporte aleatório.
 *
 * @returns {string} O número de Passaporte gerado.
 * @example
 * // Passaporte gerado
 * console.log(gerar.passaporte); // "AB1234567"
 */
gerar.passaporte = passaporte;

/**
 * Gera um endereço aleatório com CEP mascarado.
 * @type {Object}
 * @property {string} cep - Retorna o CEP.
 * @property {string} logradouro -Retorna o logradouro.
 * @property {number} numero - Retorna o número aleatório.
 * @property {string} complemento - Retorna o complemento (caso exista).
 * @property {string} bairro - Retorna o bairro.
 * @property {string} localidade - Retorna o localidade (cidade/municipio/distrito/zona/região administrativa).
 * @property {string} estado - A sigla do estado.
 * @example
 * console.log(endereco);
 * // {
 * //   cep: "12345-678",
 * //   logradouro: "Rua Exemplo",
 * //   numero: 123,
 * //   complemento: "Apto 101",
 * //   bairro: "Centro",
 * //   localidade: "São Paulo",
 * //   estado: "SP"
 * // }
 *
 * @example
 * console.log(endereco.cep);
 * // 12345-678
 *
 * @example
 * console.log(endereco.logradouro);
 * // Rua Exemplo
 */
gerar.endereco = endereco;


/**
 * Gera um endereço aleatório.
 * @param {boolean} [mask=false] - Indica se o CEP deve ser mascarado.
 * @param {string} state - A sigla do estado para filtrar os endereços.
 * @returns {Object} Um objeto contendo os detalhes do endereço.
 * @returns {string} return.cep - O CEP do endereço.
 * @returns {string} return.logradouro - O logradouro do endereço.
 * @returns {number} return.numero - O número aleatório do endereço.
 * @returns {string} return.complemento - O complemento do endereço.
 * @returns {string} return.bairro - O bairro do endereço.
 * @returns {string} return.localidade - A localidade do endereço.
 * @returns {string} return.estado - A sigla do estado do endereço.
 * @example
 * const endereco = address(true, "SP");
 * console.log(endereco);
 * // {
 * //   cep: "12345-678",
 * //   logradouro: "Rua Exemplo",
 * //   numero: 123,
 * //   complemento: "Apto 101",
 * //   bairro: "Centro",
 * //   localidade: "São Paulo",
 * //   estado: "SP"
 * // }
 *
 * @example
 * const endereco = address(true, "RJ");
 * console.log(endereco.cep);
 * // 21362-100
 *
 * @example
 * console.log(endereco.logradouro);
 * // Travessa da Prata do Sossego
 */
gerar.enderecoFnc = enderecoFnc;


/**
 * Gera um endereço de e-mail aleatório.
 *
 * O endereço de e-mail gerado pode ser baseado em um nome completo fornecido ou em um apelido aleatório.
 *
 * @param {string} [fullName] - O nome completo a ser usado para gerar o endereço de e-mail. Se não fornecido, um apelido aleatório será usado.
 * @returns {string} O endereço de e-mail gerado.
 * @example
 * // Gera um endereço de e-mail com base em um apelido aleatório
 * console.log(gerar.email()); // Pode retornar algo como "alpha@gmail.com"
 *
 * // Gera um endereço de e-mail com base no nome fornecido "Marcelo Lourenço"
 * console.log(gerar.email("José Maria")); // Pode retornar algo como "jose.maria@ig.com"
 *
 * // Gera um endereço de e-mail com base no nome aleatório
 * console.log(gerar.email(gerar.nomeFemininoCompleto)); // Pode retornar algo como "ana.borges@hotmail.com"
 */
gerar.email = email;


/**
 * Gera uma placa de veículo aleatória no formato antigo (3 letras, 4 números).
 *
 * @param {boolean} [mask=false] - Se `true`, a placa será retornada com a máscara de formatação (XXX-9999). Se `false`, a placa será retornada apenas com os dígitos e letras.
 * @returns {string} A placa de veículo gerada.
 * @example
 * // Placa com máscara
 * console.log(gerar.placaAntiga(true)); // "ABC-1234"
 *
 * // Placa sem máscara
 * console.log(gerar.placaAntiga(false)); // "ABC1234"
 */
gerar.placaAntiga = placaAntiga;


/**
 * Gera uma placa de veículo aleatória no formato Mercosul (3 letras, 1 número, 1 letra, 2 números).
 *
 * @param {boolean} [mask=false] - Se `true`, a placa será retornada com a máscara de formatação (XXX-9X99). Se `false`, a placa será retornada apenas com os dígitos e letras.
 * @returns {string} A placa de veículo gerada.
 * @example
 * // Placa com máscara
 * console.log(gerar.placaMercosul(true)); // "ABC-1D23"
 *
 * // Placa sem máscara
 * console.log(gerar.placaMercosul(false)); // "ABC1D23"
 */
gerar.placaMercosul = placaMercosul;


export default {
  gerar,
  nomeMasculino,
  nomeFeminino,
  nomeDoMeio,
  sobrenome,
  nomeMasculinoCompleto,
  nomeFemininoCompleto,
  nomePai,
  nomeMae,
  apelido,
  dataNascimento,
  corPele,
  tipoSanguineo,
  orientacaoSexual,
  identidadeGenero,
  identidadePorOrientacao,
  provedorEmail,
  cnh,
  cnhCategoria,
  cnpj,
  cpf,
  rg,
  pis,
  cns,
  tituloEleitor,
  passaporte,
  endereco,
  enderecoFnc,
  email,
  placaAntiga,
  placaMercosul
};

