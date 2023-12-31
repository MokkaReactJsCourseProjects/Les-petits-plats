//Exports
export const mainSearchBar = document.getElementById("main-search");
export const cardList = document.getElementById("card-list");
export const noResultMessage = document.getElementById("no-result-msg");
export const resultCount = document.getElementById("result-count");
export const buttonFilterIngredient =
    document.getElementById("filter-ingredient");
export const buttonFilterAppliance =
    document.getElementById("filter-appliance");
export const buttonFilterUstensil = document.getElementById("filter-ustensil");
export const filters = document.getElementsByClassName("filter");
export const filtersApplied = document.getElementById("filters-applied");
export function filterOptionLists() {
    const selectedList = document.getElementById("filters-selected");
    const unselectedList = document.getElementById("filters-unselected");
    return { selectedList, unselectedList };
}
