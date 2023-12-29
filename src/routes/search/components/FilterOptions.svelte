<div id="Filters-Container">
    <select name="Sort-By">
        <option value="Sort-By" disabled selected>Sort By</option>
        <option value="Price-Low-High">Price (low-high)</option>
        <option value="Price-High-Low">Price (high-low)</option>
        <option value="Bedrooms-Low-High">Bedrooms (low-high)</option>
        <option value="Bedrooms-High-Low">Bedrooms (high-low)</option>
        <option value="Showers-Low-High">Showers (low-high)</option>
        <option value="Showers-High-Low">Showers (high-low)</option>
        <option value="Noise-Low-High">Noise (low-high)</option>
        <option value="Noise-High-Low">Noise (high-low)</option>
    </select>
    
    <select name="Type">
        <option value="Property-Type" disabled selected>Property Type</option>
        <option value="House">House</option>
        <option value="Flat">Flat</option>
    </select>

    <select name="Bedrooms">
        <option value="Bedrooms" disabled selected>Bedrooms</option>
        <option value="One-Or-More">1+</option>
        <option value="Two-Or-More">2+</option>
        <option value="Three-Or-More">3+</option>
        <option value="Four-Or-More">4+</option>
    </select>

    <select name="Showers">
        <option value="Showers" disabled selected>Showers</option>
        <option value="One-Or-More">1+</option>
        <option value="Two-Or-More">2+</option>
        <option value="Three-Or-More">3+</option>
        <option value="Four-Or-More">4+</option>
    </select>
    
    <select name="Noise-Level">
        <option value="Noise-Level" disabled selected>Noise Level</option>
        <option value="Quiet">Quiet (1-3)</option>
        <option value="Moderate">Moderate (3-6)</option>
        <option value="Loud">Loud (6-10)</option>
    </select>
</div>

<style>
    #Filters-Container {
        display: flex;
        flex-direction: column;

        justify-content: center;
        align-items: center;

        gap: 10px;
    }

    select {
        color: white;
        background-color: var(--light_brown);

        border: none;
        cursor: pointer;

        font-size: 25px;

        padding: 10px;
        border-radius: 5px;

        width: 100%;
    }

    @media only screen and (max-width: 900px) {
        #Filters-Container {
            flex-direction: row;
            flex-wrap: wrap;

            justify-content: center;
            align-items: center;

            gap: 10px;
        }
    }
</style>