
// Read data

async function onRead(){
    let data = await fetch('https://crud.teamrabbil.com/api/v1/ReadProduct');
    let JsonData = await data.json();
    console.log(JsonData);
}