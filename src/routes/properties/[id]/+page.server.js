export async function load({ params }) {
    
    // Gets the data about the specific property
    const response = await fetch("http://api:8000/properties/" + params.id);
    const data = await response.json();

    // Gets the images's alt descriptions
    const imagesRes = await fetch("http://api:8000/images/" + params.id);
    const images = await imagesRes.json();

    data["images"] = images;

    return data;
}