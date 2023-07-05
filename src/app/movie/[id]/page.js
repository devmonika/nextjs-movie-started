

const page =async ({params}) => {
    const id = params.id;

    const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '3e5564ea95msh434427981b973bdp1f8036jsn4e548c391533',
                'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
            }
        };
        const res = await fetch(url, options);
        const data =await res.json();
        // console.log(data)
        const main_data = data[0].details;
        console.log(main_data)

    return (
        <div className="container mx-auto mt-16">
            <div className="card lg:card-side text-white">
                <figure><img className="rounded-lg" src={main_data.backgroundImage.url} alt="Album"/></figure>
                <div className="card-body">
                    <h2 className="card-title">{main_data.title}</h2>
                    <p>{main_data.synopsis}</p>
                    <div className="card-actions justify-start">
                    <button className="btn btn-primary">Watch</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;