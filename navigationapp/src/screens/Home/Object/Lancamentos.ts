import Lancamento from "./Lancamento";
import LancamentoCartao from "./LancamentoCartao";
import LancamentoType from "./LancamentoType";

export class Lancamentos 
{
    private _valorTotalEntrada: number = 0;
    private _valorTotalSaida: number = 0;
    private lancamentos: Lancamento[] = [];
    private _time: any[] = [];
    
    public adicona(lancamento: Lancamento)
    {
        this.lancamentos.push(lancamento);
        if (lancamento instanceof LancamentoCartao) this._valorTotalSaida += lancamento.valor;
        if (lancamento instanceof LancamentoType)
        {
            if(lancamento.receita) this._valorTotalEntrada += lancamento.valor;
            if(!lancamento.receita) this._valorTotalSaida += lancamento.valor;
        }
    }

    public lista(): any[]
    {
        return this.lancamentos;
    }

    get time (): any[]
    {
      return this._time;
    }

    get valorTotalEntrada(): number
    {
        return this._valorTotalEntrada;
    }

    get valorTotalSaida(): number
    {
        return this._valorTotalSaida;
    }

    public organizarDatas(): void
    {
        const meses = this.lancamentos.reduce((datas, lancamento) =>
        {
            const mes = new Date(lancamento.data).toLocaleString('pt-BR', { month: 'long' });
            if (datas[0].nome === "") datas[0].nome = mes;
            const verificarMes = datas.some(item => item.nome === mes);
            if (!verificarMes) datas.push({nome: mes})
            return datas;
        }, 
            [{nome: ""}],
        );
        const anos = this.lancamentos.reduce((datas, lancamento) =>
        {
            const ano = new Date(lancamento.data).getFullYear().toString();
            if (!datas[0].nome) datas[0].nome = ano;
            const verificarAno = datas.some(item => item.nome === ano);
            if (!verificarAno) datas.push({nome: ano})
            return datas;
        }, 
            [{nome: ""}],
        );
        const mes = {type: "Mes", valores: meses};
        const ano = {type: "Ano", valores: anos};

        this._time = [mes, ano];
    }

    public paraTexto(): string
    {
        return JSON.stringify(this.lancamentos, null, 2);
    }

    public ehIgual(lancamentos: Lancamentos): boolean 
    {
        return JSON.stringify(this.lancamentos) === JSON.stringify(lancamentos.lista());
    }
}