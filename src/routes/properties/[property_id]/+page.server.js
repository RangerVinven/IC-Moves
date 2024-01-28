// import propertyInfoJson from "../../static/assets/Properties/26_Orchard_Road/info.json"

export async function load({ fetch, params }) {

    let propertyData = {};
    await fetch("http://localhost:3000/properties/" + params.property_id)
        .then(res => res.json())
        .then(data => {
            propertyData = data;
        });
    
    return propertyData;
}