import crime from "./Crime.json";
import delit from "./Delit.json";
import crimeDelitArme from "./CrimeDelitArme.json";
import conseilMunicipal from "./ConseilMunicipal.json";
import route from "./Route.json";

export interface ObjectPeine {
    article: string,
    label: string,
    tempsIC: string,
    tempsOOC: string,
    typeTempsIC: string,
    Amende: string
}

export const peine: ObjectPeine[] = [
    ...crime,
    ...delit,
    ...crimeDelitArme,
    ...route,
    ...conseilMunicipal
]