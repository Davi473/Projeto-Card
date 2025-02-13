import Lancamento from "./Lancamento";

export default class LancamentoType extends Lancamento
{
    private readonly _receita: boolean;

    constructor(id: string, icone: string, name: string, date: Date, cartao: boolean, receita: boolean, readonly _valor: number)
    {
        super(id, icone, name, date, cartao);
        this._receita = receita;
    }

    get receita (): boolean
    {
        return this._receita;
    }

    get valor (): number
    {
        return this._valor;
    }
}