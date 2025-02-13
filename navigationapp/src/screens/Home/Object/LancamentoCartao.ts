import Lancamento from "./Lancamento";

export default class LancamentoCartao extends Lancamento
{
    private readonly _compras: Compras[] | [];

    constructor(id: string, icone: string, name: string, date: Date, cartao: boolean, compras: Compras[])
    {
        super(id, icone, name, date, cartao);
        this._compras = compras;
    }

    get valor (): number 
    {
        return this._compras.reduce((valor, compra) => valor + compra.valor, 0);
    }

    get compras (): Compras[] | []
    {
        return this._compras;
    }
}

type Compras = 
{
    id: string,
    name: string,
    valor: number,
    data: Date
}