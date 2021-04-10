import { Counter } from "./Counter";
import { RepositoryItem } from "./RepositoryItem";

import "../styles/repositores.scss";
import { useEffect, useState } from "react";

//TIPAGEM DO REPOSITORIO
interface Repository {
    id: number;
    name: string;
    description: string;
    html_url: string;
};
// TIPAGEM DO USUARIO
interface User {
    name: string;
};

//COMPONENTE PAI DO Repositoryitem
export function ReposotoryList() {

    //REPOSITORIO
    const [repositories, setRepositories] = useState<Repository[]>([]);
    //USUARIO DO REPOSITORIO
    const [user, setUser] = useState<User>();

    useEffect(() => {
        fetch('https://api.github.com/users/stanislawiaw2018')
            .then(response => response.json()) //TRANSFORMANDO A RESPOSTA EM JSON
            .then(data => setUser(data)) // SETANDO OS DADOS NA VARIÁVEL USER
    }, []);

    useEffect(() => {
        fetch('https://api.github.com/users/stanislawiaw2018/repos')
            .then(response => response.json()) //TRANSFORMANDO A RESPOSTA EM JSON
            .then(data => setRepositories(data)) // SETANDO OS DADOS NA VARIÁVEL REPOSITORIES
    }, []);




    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
                {repositories.map(repository => {
                    return (
                        <div className="Card-repository" key={repository.id}>

                            <RepositoryItem repository={repository} name={user?.name} />
                        </div>
                    )

                })}

            </ul>
            <div className="group-button">
                <Counter />

            </div>
        </section>
    )
}