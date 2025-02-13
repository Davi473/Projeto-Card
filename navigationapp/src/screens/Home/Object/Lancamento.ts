export default class Lancamento
{
    protected readonly _id: string;
    protected readonly _name: string;
    protected readonly _data: Date;
    protected readonly _cartao: boolean
    protected readonly _icone: string

    constructor (id: string, icone: string, name: string, date: Date, cartao: boolean) {
        this._id = id;
        this._name = name;
        this._data = date;
        this._cartao = cartao;
        this._icone = icone;
    }

    get id (): string
    {
        return this._id;
    }

    get name (): string
    {
        return this._name;
    }

    get data (): Date
    {
        return this._data;
    }

    get cartao (): boolean
    {
        return this._cartao;
    }

    get icone (): string
    {
        return this._icone;
    }
}