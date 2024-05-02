declare namespace Express{
    export interface Request {
        id_user: {
            sub: string
            permissoes?: string[]
        }
    }
}