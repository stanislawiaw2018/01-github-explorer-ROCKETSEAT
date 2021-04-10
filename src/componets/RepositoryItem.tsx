// TIPAGEM
interface RepositoryItemProps {
    repository: {
        name: string;
        description: string;
        html_url: string;
    },
    name?: string;

}

// componente filho do ReposotoryList
export function RepositoryItem(props: RepositoryItemProps) {

    return (

        <li>
            <p><strong>{props.repository?.name ?? 'Default'}</strong></p>
            <p><strong>Autor:</strong><i> {props.name ?? 'Não informado'}</i></p>
            <p className="description">{props.repository?.description ?? "Sem descrição"}</p>
            <a href={props.repository?.html_url ?? "#"} target="_blank" >
                <button className="btn-card" type="button">
                    {props.repository?.html_url ? "Acessar repositorio" : "Sem link"}
                </button>
            </a>
        </li>


    )
}