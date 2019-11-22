

export default class Utils {
    static toRad(degrees) {
        return degrees * Math.PI / 180;
    }

    static distance(lon1, lat1, lon2, lat2) {
        var R = 6371; // Radius of the earth in km
        var dLat = Utils.toRad(lat2 - lat1)
        var dLon = Utils.toRad(lon2 - lon1)
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(Utils.toRad(lat1)) * Math.cos(Utils.toRad(lat2)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c; // Distance in km
        return d;
    }
}