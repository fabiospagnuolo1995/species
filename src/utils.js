export const mapSpeciesModel =  (species) => ({
    taxonId: species.taxonid,
    name: species.scientific_name,
    commonName: species.main_common_name,
    category: species.category,
    class: species.class_name
});