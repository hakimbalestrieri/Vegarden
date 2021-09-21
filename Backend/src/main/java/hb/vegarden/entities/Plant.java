package hb.vegarden.entities;

import hb.vegarden.dto.PlantResponse;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;
@Data
@Document
public class Plant {
    @Id
    private String id;
    private String name;
    private String description;
    private List<String> countryAvailability;
    private List<Plant> avoidPlants;

}
