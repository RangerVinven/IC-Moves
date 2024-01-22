// import propertyInfoJson from "../../static/assets/Properties/26_Orchard_Road/info.json"

export async function load({ fetch, params }) {

    let propertyData = {};
    await fetch(`../assets/Properties/${params.property_id}/info.json`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            propertyData = data;
        });
    
    return propertyData;
}