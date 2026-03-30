const hobbies = ["Video Game", "Música", "Desenho"]

export const Hobbies = () => {
    const [hobbyPreferido, ...outrosHobbies]= hobbies;
    const novosHobbies = ["Academia", "Xadres"]
    const meusHobbies = [...outrosHobbies, ...novosHobbies]
    return (  
        <div>
            <p>Estes são os meus robbies</p>
            <ul className="list-disc pl-5">
                <li className="font-bold">{hobbyPreferido}</li>
                {meusHobbies.map((hobbie) => (
                    <li key={hobbie}>{hobbie}</li>
                ))}</ul>
        </div>  
    ) 
}