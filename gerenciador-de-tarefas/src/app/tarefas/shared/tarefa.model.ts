/*
  ? em typescript informa que o parâmetro é opcional
*/
export class Tarefa {
  constructor(
    public id?: number,
    public nome?: string,
    public concluida?: boolean
  ) { }
}

