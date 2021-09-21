package hb.vegarden.dto;


import hb.vegarden.entities.Plant;

public class PlantResponse {
    public String id;
    public String name;
    public String description;
    public String[] countryAvailability;


    public PlantResponse(Plant plant) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.countryAvailability = countryAvailability;
    }
}

