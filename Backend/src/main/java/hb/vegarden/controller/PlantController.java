package hb.vegarden.controller;

import hb.vegarden.dto.PlantResponse;
import hb.vegarden.entities.Plant;
import hb.vegarden.services.PlantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class PlantController {

    public static final String ROOT_PATH = "/";

    private PlantService plantService;

    @Autowired
    public PlantController(PlantService plantService) {
        this.plantService = plantService;
    }

    @GetMapping("/getPlants")
    public ResponseEntity<List<PlantResponse>> getPlants() {
        List<PlantResponse> plantResponses = new ArrayList<>();
        for(Plant plant : plantService.findAll()) {
            plantResponses.add(new PlantResponse(plant));
        }

        return ResponseEntity.ok(plantResponses);
    }
}
