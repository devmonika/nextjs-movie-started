import Loading from "../Loading";
import Movie from "../component/Movie";


const page = async () => {
        const url = process.env.RAPID_KEY;
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
        const main_movie = data.titles;
    return (
        
        <div className="container mx-auto mb-10">
            <Loading></Loading>
            <h1 className="text-red-500 text-5xl font-semibold text-center my-5">Movie List</h1>
            <div  className="grid grid-cols-3 gap-y-16">
            {
                main_movie.slice(0,9).map((item) => {
                return <Movie key={item.id} {...item}></Movie>
            })
            }
            </div>
        </div>
    );
};

export default page;