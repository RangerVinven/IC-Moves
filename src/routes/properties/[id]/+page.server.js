// Gets the data about the specific property
export async function load({ params }) {
    const response = await fetch("http://127.0.0.1:8000/properties/" + params.id);
    const data = await response.json();

    return data;
}