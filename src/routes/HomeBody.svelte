
<div id="HomeBody">
    <div id="Copy-Container">
        <div class="Looking-For-Option">
            <img src="assets/Home_Page/Father_Child_Ornament.jpg" alt="A father showing their child a christmas tree ornament" />
            <h3>A new home to raise your family</h3>
        </div>

        <div id="Middle-Copy" class="Looking-For-Option">
            <h3>Your first flat so you can spread your wings</h3>
            <img src="assets/Home_Page/Woman_Painting.jpg" alt="A woman painting at a desk" />
        </div>

        <h3 id="Or-Even">Or even...</h3>
        
        <div id="Last-Image" class="Looking-For-Option">
            <img src="assets/Home_Page/Elderly_Couple.jpg" alt="An elderly couple on a couch drinking wine" />
            <h3>A new place to enjoy your retirement</h3>
        </div>
    </div>
</div>

<style>

    #Copy-Container {
        max-width: 90%;
        height: max-content;

        display: flex;
        flex-direction: column;
        align-items: center;
    }
    div:has(#HomeBody) {
        display: flex;
        
        justify-content: center;
        align-items: center;
    }

    #HomeBody {
        background-color: var(--light_brown);
        border-radius: 7.5px;

        width: 70%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .Looking-For-Option {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;

        margin-top: 5%;
    }

    .Looking-For-Option img {
        margin-left: 50px;
        margin-right: 50px;
        border-radius: 8px;

        width: 400px;
    }

    #Last-Image {
        margin-top: 2px;
        margin-bottom: 25px;
    }

    #Or-Even {
        font-size: 35px;
        margin-top: 3%;
    }

    h3 {
        color: white;
        font-weight: normal;
        font-size: 30px;

        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
    }

    @media only screen and (max-width: 1000px) {

        #HomeBody {
            padding-left: 5%;
            padding-right: 5%;
        }

        .Looking-For-Option {
            flex-direction: column;
            margin-top: 5%;
        }

        .Looking-For-Option img {
            width: 300px;            
        }

        #Or-Even {
            margin-bottom: 13%;
        }

        #Middle-Copy {
            flex-direction: column-reverse;
        }
    }

   

    
</style>