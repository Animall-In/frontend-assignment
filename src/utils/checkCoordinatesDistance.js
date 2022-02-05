export function checkCoordinatesDistance(lat1,lon1,lat2,lon2){
    console.log('DISTANCE CHECK: ', lat1, lon1, lat2, lon2);
    let dLat,dLon,a,c,d;
    if (lat2 && lon2) {
        const R = 6371; // Radius of the earth in km

        dLat = (lat2 - lat1) * (Math.PI / 180);
        dLon = (lon2 - lon1) * (Math.PI / 180);
        a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
        c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        d = R * c; // Distance in km
    }
    return d;
}
let post ={lat1:0,lon1:0}
const showPosition = (position) =>{
    post.lat1 = position.coords.latitude;
    post.lon1 = position.coords.longitude;
}
export const getCoordinate = () => {
    post= {lat1:0,lon1:0}
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
}
export const getCurrentLocation = () =>{
    return post;
}