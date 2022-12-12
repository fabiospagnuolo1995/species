const baseUrl = "https://apiv3.iucnredlist.org/api/v3";
const myToken = "9bb4facb6d23f48efbf424bb05c0c1ef1cf6f468393bc745d42179ac4aca5fee"

export const makeApiRegionUrl = () => {
    return baseUrl + "/region/list?token=" + myToken;
};

export const makeApiSpeciesByRegion = (parameter) => {
    return baseUrl + "/species/region/" + parameter + "/page/0?token=" + myToken;
}

export const makeApiSpeciesCrMeasures = (parameter) => {
    return baseUrl + '/measures/species/id/' + parameter + "?token=" + myToken;
}

