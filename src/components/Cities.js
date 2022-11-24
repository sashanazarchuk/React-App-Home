export default function Cities(props) {
    const cities = [
        {
            number: 1,
            name: "Rivne",
            location: "It is located in the north-western part of Ukraine",
            area: "64 km²",
            population: "243 873"
        },

        {
            number: 2,
            name: "Kyiv",
            location: "The city is located in the north of Ukraine, on both banks of the Dnipro in its middle course",
            area: "836 km²",
            population: "2 952 301"
        },

        {
            number: 3,
            name: "Lviv",
            location: "Lviv is located in the central part of Lviv region between Yavorivskyi, Zhovkivskyi and Pustomytivskyi districts",
            area: "149 km²",
            population: "717 273"
        },

        {
            number: 4,
            name: "Odesa",
            location: "Odesa is located on the northwestern coast of the Black Sea",
            area: "162.42 km²",
            population: "1 010 537"
        }

    ]

    return (

        <div className="city-container">
            {cities.map((c) => (
                <table key={c.number}>
                    <thead>
                        <tr>{c.name}</tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><span>Location:</span> {c.location}</td>
                        </tr>
                        <tr>
                            <td><span>Area:</span> {c.area}</td>
                        </tr>
                        <tr>
                            <td><span>Population:</span> {c.population}</td>
                        </tr>
                    </tbody>
                </table>
            ))}
        </div>
    );



}