/*
  ? em typescript informa que o parâmetro é opcional
*/

interface Fields {
  id?: number,
  name?: string,
  concluida?: boolean
}

export class Tarefa {
  constructor(Field: Fields) { }
}